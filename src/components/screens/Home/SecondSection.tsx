const SecondSection = () => {
  return (
    <div className='relative flex h-[600px] '>
      <div
        className='absolute bottom-[0px] h-[650px] w-1/2 bg-home-bg object-fill'
        style={{
          background: "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 5%, #0D5069 100%), url('/images/home-bg.png')",
          backgroundRepeat: 'no-repeat',
          //   bsckgroundPosition: 'center',
          backgroundColor: '#0D5069',
        }}
      ></div>
    </div>
  )
}

export default SecondSection
