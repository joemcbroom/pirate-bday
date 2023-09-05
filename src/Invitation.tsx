const Invitation = () => {
  return (
    <div className='w-full mx-auto h-full absolute text-zinc-800 z-50'>
      <img
        src='/paper-bg-removebg.png'
        alt='paper background'
        className='w-full h-full absolute object-contain'
      />
      <div className='w-full h-full absolute flex flex-col justify-center items-center'>
        <div className='text-center flex flex-col justify-around'>
          <span className='script-font text-5xl'>Ahoy There Mateys!</span>
          <img
            src='/skull.png'
            alt='skull'
            className='w-1/4 mx-auto object-contain'
          />
          <span className='text-4xl display-font'>Captain Keane</span>
          <span className='text-sm'>
            is looking for shipmates to celebrate his
          </span>
          <span className='script-font text-5xl my-2'>5th Birthday</span>
          <span className='text-sm'>We will be setting sail</span>
          <span className='text-lg font-semibold'>
            Saturday, Sept 30th at 3PM
          </span>
          <span className='text-sm mt-2'>The ship is docked at</span>
          <span className='text-lg font-semibold'>
            <a
              href='https://goo.gl/maps/W7Bj3NaZsMyYwmiP7'
              target='_blank'
              rel='noreferrer'
              className='underline text-inherit text-sm z-50 pointer-events-auto'
            >
              4015 Marsol Ave, Grove City, OH 43123
            </a>
          </span>
          <span className='text-sm mt-2'>RSVP to the Captain's 1st Mate</span>
          <span className='text-lg font-semibold'>
            <a
              href='sms://818-809-8454?body=Ahoy%20Matey!%20We%20will%20be%20there%20to%20celebrate%20with%20Captain%20Keane.%20Number%20of%20scallywags:%20Adults%20Children'
              target='_blank'
              rel='noreferrer'
              className='underline text-inherit text-sm z-50 pointer-events-auto'
            >
              818-809-8379
              <span className='flex items-center justify-center text-xs gap-1'>
                (Joe's Cell)
                <img
                  className='inline w-3 h-3'
                  src='/src/assets/paper-plane.png'
                />{' '}
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
