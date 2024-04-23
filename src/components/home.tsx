
const handleDownload =()=>{
    const link = document.createElement('a');
    link.href = "Vignesh_B_AUTOMATION_Profile.pdf";
    link.download = 'vignesh_cv.pdf';
    link.click();
};

const Home = () => {
    return <div className="text-[#f9fdff] px-[10rem] py-[4rem]">
        <p className="text-6xl font-bold leading-[4rem]">
            Hello, I'm <br /> a Software Test Engineer (SDET)
        </p>
        <button onClick={handleDownload}className="bg-[#ff4b57] px-6 py-2 mt-10">
            Download CV
        </button>
    </div>
}


export default Home;