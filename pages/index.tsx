import Head from "next/head"
import WatermarkImage from "../components/WatermarkImage"

const Home = () => {
  const headerButton = () => {
    alert("Click")
  }

  return (
    <div className="h-full mx-auto overflow-y-scroll">
      <Head>
        <title>One page</title>
      </Head>
      <header className="w-full h-full">
        <div className="flex items-center h-12 px-5">
          <h1>Header</h1>
        </div>
        <WatermarkImage src="./images/header_bk.jpg" onClick={headerButton} title="One Page">
          The computer is only a fast idiot; it has no imagination; it cannot originate action. It is, and will remain, only a tool of man.
        </WatermarkImage>
      </header>
      <section className="my-3">
        <article className="container mx-auto">
          <div className="flex items-center w-full p-2 bg-white border shadow rounded-xl">
            <div className="flex items-center space-x-4">
              <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" className="w-16 h-16 rounded-full" />
            </div>
            <div className="flex-grow p-3">
              <div className="font-semibold text-gray-700">
                Antério Vieira da Silva Lima
              </div>
              <div className="text-sm text-gray-500">
                You: Thanks, sounds good! . 8hr
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Home