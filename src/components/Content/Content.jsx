
const Content = () => {

  return(
      <main>
          <header >
              <form action="">
                  <input type="search" placeholder='Search task'/>
                  <button type='submit'><img className='' src="/search.svg" alt=""/></button>
              </form>

              <div className=''>
                  <time dateTime={Date()}> 25 Ноября 2023 </time>
              </div>
          </header>
          <section>
              <h1>
                  Today`s Tasks
              </h1>

              <div className=''>
                  Filters
              </div>
          </section>
      </main>
  )
}

export default Content