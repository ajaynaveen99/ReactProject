import "./index.css";
import Question from "./components/Question"; // separate component

// our questions data
const questions = [
  {
    id: 1,
    title: "Do I Have To Allow The Use Of Cookies?",
    info: "Yes, cookies help personalize your experience and are required for certain features."
  },
  {
    id: 2,
    title: "How Do I Change My My Page Password?",
    info: "Go to settings, select 'Change Password', and follow the instructions."
  },
  {
    id: 3,
    title: "What Is BankID?",
    info: "BankID is a secure electronic identification system used for logging in and signing documents."
  },
  {
    id: 4,
    title: "Whose Birth Number Can I Use?",
    info: "You should only use your own birth number for identification purposes."
  },
  {
    id: 5,
    title: "When Do I Recieve A Password Ordered By Letter?",
    info: "You will receive it within 5–7 business days via postal mail."
  }
];

function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions</h3>
        <section className="info">
          {questions.map((q) => (
            // pass the whole object as props
            <Question key={q.id} {...q} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
