import MainLayout from '../layouts/MainLayout'

const Step = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#F9F4EC] text-center px-5">
        <h1 className="text-[36px] md:text-[48px] font-[poppins-semibold] text-[#BD8928] mb-3">
          Coming Soon
        </h1>
        <p className="text-[18px] md:text-[20px] text-black font-[poppins-regular] max-w-[600px] leading-8">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>
      </div>

    </MainLayout>
  )
}

export default Step