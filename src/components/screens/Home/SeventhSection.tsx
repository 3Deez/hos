import Map from '@/components/Map/Map'

const SeventhSection = () => {
  return (
    <div className='my-20 flex min-h-screen items-center justify-center py-10'>
      <div className='h-[90vh] w-full '>
        <h1 className='mx-auto mb-10 w-11/12 text-5xl font-extrabold text-black'>Have Any Questions?</h1>
        <div className='flex h-full justify-between'>
          <div className='w-1/2 '>
            <Map
              containerStyle={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className='h-full w-1/2 bg-primary'>
            <div className=''>Contact section</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeventhSection
