function Resume(){
    return (
    <section id="resume" className="px-10 py-20">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Resume</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>B.Tech in Computer Science</strong> – ABES Institute of Technology, Ghaziabad (2022–2026)</li>
          <li><strong>Class 12th Science Stream</strong> – Vidya Bal Bhawan Sr. Secondary School, Delhi (2021–2022)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        <p className="text-gray-700">
          <strong>AI/ML Trainee</strong> – Global Infoventures Pvt Ltd<br />
          • Worked on PPE Violation Detection and Multi-Person Face Detection<br />
          • Hands-on with Linux, Docker, and NVIDIA DGX A100 server<br />
          • Team leadership and dataset preparation
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <p className="text-gray-700">
          HTML, CSS (Tailwind, Bootstrap), JavaScript, React, Node.js, Python, Java, C, SQL, Git, GitHub, Excel, DBMS, OOPs
        </p>
      </div>
    </section>
  );
}
export default Resume;