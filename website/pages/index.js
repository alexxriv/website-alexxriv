import Layout from "../components/layout";

const description =
  "Software Engineer based in Mexico, currently working in finance applications.";
const titleSuffix = "About";

export default function Home() {
  return (
    <Layout description={description} titleSuffix={titleSuffix}>
      <h2 className="text-4xl font-bold mb-3">About Me</h2>
      <p className="text-lg text-gray-800">
        I am a Software Engineer based in Mexico and currently working in finance applications.
        I'm passionate about building systems at scale and real-time systems.
        <br></br>
        On my free time, I enjoy watching movies, travelling, and listening to
        music.
      </p>
      <h3 className="text-xl text-gray-900 font-medium mt-5 mb-1 pt-1">
        Projects
      </h3>
      <ul className="list-disc list-inside ml-3 mt-2 text-gray-800">
        <li className="mt-2">
          <a href="https://github.com/alexxriv/fraudDetection" className="text-blue-600">
            Fraud Detection with ML
          </a>{" "}
          (2023): Implemented a Fraud Detection model using a Random Forest Classifier and a Logistic Regression Classifier.
          Results of the classifiers were measured using the F1 score, presition and recall.
        </li>
        <li className="mt-2">
          <a href="https://michelappfront.vercel.app/" className="text-blue-600">
            Michelapp
          </a>{" "}
          (2023): a fullstack web application that allows users to order items from a restaurant.
          Users can create an account, add items to their cart, and checkout.
          The backend is built with Python and FastAPI, and the frontend is built with React, Nextjs and TailwindCSS.
          The backend follows a server architecture with a REST API documented with Swagger.

          <div className="mt-2">
            [
            <a
              href="https://github.com/DONMARCORS/Michelapp-Frontend"
              className="text-blue-600"
            >
              Frontend GitHub Repo
            </a>

            ]
          </div>
          [
          <a
            href="https://github.com/DONMARCORS/Michelapp-Backend"
            className="text-blue-600"
          >
            Backend GitHub Repo
          </a>
          ]
        </li>
        <li className="mt-2">
          <a
            href="https://peranto.pages.dev"
            className="text-blue-600"
          >
            Peranto App
          </a>{" "}
          (2023): A Fullstack app that offers identity services (e.g., store documents,
          authentication, registered kyc's in 3rd party apps). It uses a service-oriented architecture with a REST API documented with Swagger.
          App is splitted in 3 microservices: Auth, Core and Frontend. The Auth service is built with Typescript, it's a service that handles authentication and authorization allowing 3rd party authentication with other apps. The Core service is built with Python and FastAPI, it's a service that handles the business logic of the app. The Frontend is built with React, Nextjs and TailwindCSS.
          [
          <a
            href="https://github.com/alexxriv/peranto-backend/settings"
            className="text-blue-600"
          >
            Backend and Auth GitHub Repo
          </a>
          ]
        </li>
        <li className="mt-2">
          <a
            href="https://www.figma.com/proto/D95fVAZ5g3JIKEOemr9FAt/Asset-Management-System-Mockup-Generic?node-id=1%3A2&scaling=contain&page-id=0%3A1"
            className="text-blue-600"
          >
            OpenAI Java
          </a>{" "}
          (2022): A lightweigth, highly modular, reactive and type safe Java and Spring Library to connect to the OpenAI API.
        </li>
        <li className="mt-2">
          <a href="https://lite-pm.vercel.app/" className="text-blue-600">
            Quantum Computing tutorial
          </a>{" "}
          (2023): a Python and Q# tutorial that explains the basics of Quantum Computing. Inspired on the Microsoft Quantum winter school.
        </li>
        <li className="mt-2">
          <a
            href="https://github.com/alexxriv/JavaChat"
            className="text-blue-600"
          >
            JavaChat
          </a>{" "}
          (2021): A ligthweigth Java App that allows users to chat with each other. It uses a client-server architecture. Implemented with Sockets and JavaFX.
        </li>

        <li className="mt-2">
          <a
            href="https://github.com/alexxriv/mern_stack"
            className="text-blue-600"
          >
            Mern Stack App
          </a>{" "}
          (2019): A fullstack app that allows users to create, read, update and delete notes. The backend is built with Nodejs, Express and MongoDB. The frontend is built with React and Redux.

        </li>

      </ul>


      <h3 className="text-xl text-gray-900 font-medium mt-5 mb-1 pt-2">
        Hackathons
      </h3>
      <ul className="list-disc list-inside ml-3 mt-2 text-gray-800">
        <li className="mt-2">
          <a
            href="https://ethglobal.com/showcase/dorse-3maw4"
            className="text-blue-600"
          >
            EthGlobal San Francisco 2022
          </a>
          : "Dorse":
          <div className="ml-3">
            <div className="mt-2">
              • Worked with a team of 5 to build a Peer-to-Peer social endorsement protocol at
              EthGlobal San Francisco hackathon in a span of 2 days.
            </div>
            <div className="mt-2">
              • Developed frontend using Typescript, NextJS and ChakraUI and implemented
              authentication using Zero-Knowledge ID smart contracts using Solidity.
            </div>
            <div className="mt-2">
              • Won +1,300 USD for Best Use, Honorable mention and Protocol Integraion
            </div>
          </div>
        </li>
        <li className="mt-2">
          <a
            href="https://ethglobal.com/showcase/workies-9bzur"
            className="text-blue-600"
          >
            EthGlobal Mexico 2022
          </a>
          : "Workies":
          <div className="ml-3">
            <div className="mt-2">
              • With a team of 5, we designed and developed a NextJS/React app at EthGlobal
              Mexico hackathon in a span of 2 days.
            </div>
            <div className="mt-2">
              • Developed Solidity smart contracts to create token streams in ethereum
              blockchain.
            </div>
            <div className="mt-2">
              • Won $1500 USD for best use case of token streams and NFTs.
            </div>
          </div>
        </li>

      </ul>

      <h3 className="text-xl text-gray-900 font-medium mt-5 mb-1 pt-2">
        Certifications
      </h3>
      <ul className="list-disc list-inside ml-3 mt-2 text-gray-800">
        <li className="mt-2">
          <a
            href="https://www.credly.com/badges/56c47b07-72e1-4938-aa0d-a03a7f003b84/linked_in_profile"
            className="text-blue-600"
          >
            Qubit x Qubit Quantum Winter School 2023
          </a>{" "}
          (2023) : A intensive introductory program to Quantum Computing. It covered topics such as: Quantum Mechanics, Quantum Circuits, Quantum Algorithms, Quantum Machine Learning, Quantum Cryptography, Quantum Error Correction, Quantum Software and Quantum Hardware.
        </li>

        </ul>

    </Layout>
  );
}
