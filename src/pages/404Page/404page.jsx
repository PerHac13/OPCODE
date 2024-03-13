import error from '../../assets/404.svg'
const Page404 = () => {
  return <>

     <div className=" flex  justify-center items-center h-[54.5vh] ">
           <img className='w-[30rem]' src={error} alt='page-not-found' />
     </div>
  </>;
};

export default Page404;
