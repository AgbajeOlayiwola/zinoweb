import styles from "./styles.module.css"

const GetStarted = () => {
  return (
    <div className={styles.getStarted} id="demo">
      <div className={styles.getStartedHeader}>
        <h2>Get Started with ZINO </h2>
        <p>Watch how to create your Zino account in simple and easy steps</p>
      </div>
      <div className={styles.vid}>
        <video
          controls
          width="450"
          className="w-1/2 h-full aspect-square object-cover rounded-xl "
        >
          <source src={"/Zino_App.mp4"} type="video/webm" />
        </video>
      </div>
    </div>
  )
}

export default GetStarted
