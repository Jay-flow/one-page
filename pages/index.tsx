import Head from "next/head"
import WatermarkImage from "../components/WatermarkImage"
import Card from "../components/Card"
import Section from "../components/Section"
import Profile from "../components/Profile"
import PictureDescription from "../components/PictureDescription"

const Home = () => {
  const clickButtonHandling = () => {
    alert("모달 창 구현")
  }

  return (
    <div className="h-full mx-auto overflow-y-scroll">
      <Head>
        <title>One page</title>
      </Head>
      <header className="w-full h-full mb-14">
        <div className="flex items-center h-12 px-5 bg-gray-900">
          <h1 className="text-white">Header</h1>
        </div>
        <WatermarkImage
          style={{ height: "calc(100% - 3rem)" }}
          src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          onClick={clickButtonHandling}
          title="One Page">
          The computer is only a fast idiot; it has no imagination; it cannot originate action. It is, and will remain, only a tool of man.
        </WatermarkImage>
      </header>
      <Section title="Contents" className="mx-5 mb-14">
        <Card
          title="UI,UX Concepts"
          src="https://images.unsplash.com/photo-1534269222346-5a896154c41d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas sapiente voluptate earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur rem, vel distinctio perferendis tempore nemo sequi eos accusantium.</Card>
        <Card
          title="UI,UX Concepts"
          src="https://images.unsplash.com/photo-1509599589979-3b5a15d2816e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas sapiente voluptate earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur rem, vel distinctio perferendis tempore nemo sequi eos accusantium.</Card>
        <Card
          title="UI,UX Concepts"
          src="https://images.unsplash.com/photo-1600026963373-695752903b3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas sapiente voluptate earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur rem, vel distinctio perferendis tempore nemo sequi eos accusantium.</Card>
      </Section>
      <Section title="Profile" className="mx-5 mb-14">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Profile
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Shalot"
            content="You: I'm a Designer"
          />
          <Profile
            src="https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Jay-flow"
            content="You: I'm a developer"
          />
          <Profile
            src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Noel"
            content="You: I'm handsome :)"
          />
        </div>
      </Section>
      <WatermarkImage
        className="mb-14"
        style={{ height: "calc(100% - 3rem)" }}
        src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" title="One Page">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
        </WatermarkImage>
      <section className="mx-5 mb-14">
        <div className="container h-full mx-auto">
          <PictureDescription
            title="The forest"
            src="https://media2.giphy.com/media/xUA7aXlhmKHBNLH3jy/giphy.gif"
            pictureLocation="left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
            </PictureDescription>
        </div>
      </section>
      <section className="mx-5 mb-14">
        <div className="container h-full mx-auto">
          <PictureDescription
            title="The forest"
            src="https://media1.giphy.com/media/3o7TKVaf0pflGFzlzW/giphy.gif"
            pictureLocation="right">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
              </PictureDescription>
        </div>
      </section>
      <section className="mx-5 mb-14">
        <div className="container h-full mx-auto">
          <PictureDescription
            title="The forest"
            src="https://media0.giphy.com/media/26ybxpXV89wqtPCow/giphy.gif"
            pictureLocation="left" >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
            </PictureDescription>
        </div>
      </section>
      <section className="mx-5 mb-14">
        <div className="container h-full mx-auto">
          <PictureDescription
            title="The forest"
            src="https://media2.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.gif"
            pictureLocation="right">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
              </PictureDescription>
        </div>
      </section>
      <footer className="flex flex-col items-center justify-center text-white bg-gray-900 h-1/3">
        <h1>Copyright Gmeasying™ All Rights Reserved.</h1>
        <h2>Powered by create Jay-flow.</h2>
      </footer>
    </div >
  )
}

export default Home