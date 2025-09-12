import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment';
import {AnimatePresence, motion} from "framer-motion"
import { LuCircleAlert, LuListCollapse } from 'react-icons/lu';
import SpinnerLoader from '../../components/Loader/SpinnerLoader';
import {toast} from "react-hot-toast"
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import RoleInfoHeader from './components/RoleInfoHeader ';
import axiosInstance from '../../utils/axiosinstance';
import { API_PATHS } from '../../utils/apiPaths';
import QuestionCard from '../../components/Cards/QuestionCard';
import AIResponsePreview from './components/AIResponsePreview';
import Drawer from '../../components/Drawer';
import SkeletonLoader from '../../components/Loader/SkeletonLoader';

const InterviewPrep = () => {

  const {sessionId} = useParams();

  const [sessionData , setSessionData]  = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [openLeanMoreDrawer , setOpenLeanMoreDrawer]  = useState(false);
  const [explaination , setExplaination]  = useState(null);
  const [isLoading , setIsLoading]  = useState(false);
  const [isUpdateLoader , setIsUpdateLoader]  = useState(false);

  // Fetch sesssion data by session ID
  const fetchSessionDetailsById = async() =>{
    try {
      const response = await axiosInstance.get(API_PATHS.SESSION.GET_ONE(sessionId));

      if(response.data && response.data.session){
        setSessionData(response.data.session)
      }

    } catch (error) {
      console.error("Error : ", error)
      
    }
  };

  // Generate concept explaination
  const generateConceptExplaination = async(question) => {
    try {
      setErrorMsg("");
      setExplaination(null);
      setIsLoading(true);
      setOpenLeanMoreDrawer(true);
      
      const response = await axiosInstance.post(API_PATHS.ΑΙ.GENERATE_EXPLANATION, {
        question
      });
      if(response.data){
        setExplaination(response.data);
      }
    } catch (error) {
      setExplaination(null);
      setErrorMsg("Failed to generate explaination, Try again later!")
      console.error("Error : ", error)
    }
    finally{
      setIsLoading(false);
    }
  };

  // Pin Question
  const toggleQuestionPinStatus = async(questionId) => {
    try {
      const response = await axiosInstance.post(API_PATHS.QUESTION.PIN(questionId));
      console.log(response)

      if(response.data && response.data.question){
        // toast.success('Question Pinned Successfully)
        fetchSessionDetailsById()
      }
    } catch (error) {
      console.error("Error : ", error)
    }
  };

  // Add more questions to a session
  const uploadMoreQuestions = async() =>{};

  useEffect(() => {
    if(sessionId){
      fetchSessionDetailsById();
    }
    return () => {};
  }, []);

  return (
    <DashboardLayout>
      <RoleInfoHeader
        role = {sessionData?.role || ""}
        topicsToFocus= {sessionData?.topicsToFocus || ""}
        experience = {sessionData?.experience || "-"}
        questions = {sessionData?.questions?.length || "-"}
        description = {sessionData?.description || ""}
        lastUpdated = {
          sessionData?.updatedAt 
          ? moment(sessionId.updatedAt).format("Do MMM YYYY")
          : ""
        }   
      />

      <div className='container mx-auto pt-4 pb-4 px-4 md:px-0'>
        <h2 className='text-lg font-bold color-black px-4'>Interview Q & A</h2>
        <div className='grid grid-cols-12 gap-4 mt-5 mb-10'>
          <div 
            className={`col-span-12 ${
            openLeanMoreDrawer ? "md:col-span-7" : "md:col-span-8"
          }`}>
            <AnimatePresence>
              {sessionData?.questions?.map((data, index)=>{
                return (
                  <motion.div 
                    key={data._id || index}
                    initial = {{opacity:0 , y:-20}}
                    animate = {{opacity: 1, y:0}}
                    exit={{opacity : 0, scale: 0.95}}
                    transition={{
                      duration: 0.4,
                      type:"spring",
                      stiffness:100,
                      delay: index * 0.1,
                      damping : 15
                    }}
                    layout   // This is the key prop that animates position changes
                    layoutId={`question-${data._id || index}`}  // Helps framer tracks specific items
                    >
                      <>
                      <QuestionCard
                        question= {data?.question}
                        answer = {data?.answer}
                        onLearnMore ={()=>{
                          generateConceptExplaination(data.question)
                        }}
                        isPinned={data?.isPinned}
                        onTogglePin = {()=> toggleQuestionPinStatus(data._id)}
                      />
                      </>
                    </motion.div>
                ); 
              })}
            </AnimatePresence>
          </div>
        </div>
        <div>
          <Drawer
          isOpen={openLeanMoreDrawer}
          onClose={()=> setOpenLeanMoreDrawer(false)}
          title={!isLoading && explaination?.title}
          >
            {errorMsg && (
              <p className='flex gap-2 text-sm text-amber-600 font-medium'>
                <LuCircleAlert className='mt-1'/> {errorMsg}
              </p>
            )}
            {isLoading && <SkeletonLoader/>}
            {!isLoading && explaination && (
              <AIResponsePreview content={explaination?.explaination} />
            )}
          </Drawer>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default InterviewPrep
