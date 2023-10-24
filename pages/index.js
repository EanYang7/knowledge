import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import textStyle from "./Text.module.css";

const inter = Inter({ subsets: ["latin"] });
const combinedClassName = `${styles.center} ${textStyle.logo}`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Ean的项目</title>
        <meta name="description" content="Generated by EanYang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>项目展示</p>
          <div>
            <a
              href="https://github.com/YQisme"
              target="_blank"
              rel="noopener noreferrer"
            >
              By <span className={textStyle.changeText}>Ean Yang</span>{" "}
              <Image
                src="/avatar.jpg"
                alt="Vercel Logo"
                width={30}
                height={30}
                priority
              />
            </a>
          </div>
        </div>
        <div className={combinedClassName}>
          <svg
            t="1698132712989"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9796"
            width="200"
            height="200"
          >
            <path
              d="M795.469419 1024V633.098652a361.430834 361.430834 0 1 0-617.907714-255.503797v16.403399l-50.461305 87.577471-66.030633 114.962808H145.310954v142.904191a97.308301 97.308301 0 0 0 97.308301 97.308302h154.442176v187.248974z"
              fill="#FFC400"
              p-id="9797"
            ></path>
            <path
              d="M811.038748 1024h-31.138657V626.704106l4.587391-4.587391a346.139529 346.139529 0 1 0-591.356449-244.52186v20.156719L88.038068 581.108217H160.602258v158.334507a82.156009 82.156009 0 0 0 82.016997 82.016997h170.011504v202.540279H381.631115V852.598378H242.619255a113.294665 113.294665 0 0 1-113.016641-113.155654V611.968849H34.101467l128.168934-222.418974v-12.511068A377.417198 377.417198 0 1 1 811.038748 639.771221z"
              fill="#484F59"
              p-id="9798"
            ></path>
            <path
              d="M282.793683 653.394383l82.712056-104.258894-42.954665-70.479013-107.178143 9.174783-6.116522 113.433677 73.537274 52.129447zM292.107477 380.792128a359.762692 359.762692 0 0 0-84.658222-21.129803A360.040715 360.040715 0 0 1 319.770837 125.427342a355.870359 355.870359 0 0 1 56.855851 27.107313 360.596763 360.596763 0 0 0-84.519211 228.257473z"
              fill="#FFDC69"
              p-id="9799"
            ></path>
            <path
              d="M630.045307 663.820273l-171.818658-191.836366-171.95767-191.697354h687.413644L801.863965 471.983907l-171.818658 191.836366z"
              fill="#84F8FE"
              p-id="9800"
            ></path>
            <path
              d="M630.045307 679.389601a15.847352 15.847352 0 0 1-11.676996-5.282451L274.730995 290.573431a15.430316 15.430316 0 0 1 11.537984-26.13423h687.413644a15.430316 15.430316 0 0 1 11.676996 25.856206L641.583291 674.10715a15.291305 15.291305 0 0 1-11.537984 5.282451zM321.160956 295.855882l308.884351 344.610399 308.884351-344.610399z"
              fill="#484F59"
              p-id="9801"
            ></path>
            <path
              d="M630.045307 663.820273l-75.761463-191.836366-75.761464-191.697354h303.045853l-75.761463 191.697354-75.761463 191.836366z"
              fill="#01DEE9"
              p-id="9802"
            ></path>
            <path
              d="M630.045307 679.389601a15.70834 15.70834 0 0 1-13.901186-9.869842L464.065147 285.98604A15.430316 15.430316 0 0 1 478.939416 264.439201h303.045853a15.430316 15.430316 0 0 1 13.901186 21.268815L644.50254 669.519759a15.70834 15.70834 0 0 1-14.457233 9.869842z m-128.724982-383.533719l128.724982 325.565774 128.724981-325.565774z"
              fill="#484F59"
              p-id="9803"
            ></path>
            <path
              d="M286.268979 281.120625h687.413644l-94.528064-121.913401H380.797043l-94.528064 121.913401z"
              fill="#01CBD6"
              p-id="9804"
            ></path>
            <path
              d="M973.682623 296.689953H286.268979a15.569328 15.569328 0 0 1-12.233043-25.022135l94.528064-121.9134a15.569328 15.569328 0 0 1 12.233043-5.97751h498.357516a15.847352 15.847352 0 0 1 12.372055 5.97751l94.528064 121.9134a15.291305 15.291305 0 0 1 1.668143 16.264388 15.569328 15.569328 0 0 1-14.040198 8.757747z m-655.579928-31.138657h623.885224l-70.340001-90.774744H388.442696z"
              fill="#484F59"
              p-id="9805"
            ></path>
            <path
              d="M630.045307 158.095129l-151.522927 123.025496h303.045853l-151.522926-123.025496z"
              fill="#84F8FE"
              p-id="9806"
            ></path>
            <path
              d="M781.568233 296.689953H478.939416l-9.869842-27.802372 151.522926-123.025495h19.600673l151.661938 123.025495z m-259.257117-31.138657h215.468382l-107.734191-87.438459z"
              fill="#484F59"
              p-id="9807"
            ></path>
            <path
              d="M477.271274 281.120625l-96.057195-121.913401h-0.417036l-94.528064 121.913401h191.002295z"
              fill="#01DEE9"
              p-id="9808"
            ></path>
            <path
              d="M477.271274 296.689953H286.268979a15.569328 15.569328 0 0 1-12.233043-25.022135l94.528064-121.9134a16.264388 16.264388 0 0 1 24.744111 0l96.196206 121.9134a15.847352 15.847352 0 0 1 1.807154 16.4034 15.569328 15.569328 0 0 1-14.040197 8.618735z m-159.168579-31.138657h127.056839L381.631115 184.368371z"
              fill="#484F59"
              p-id="9809"
            ></path>
            <path
              d="M782.81934 281.120625l96.196207-121.913401h0.139012l94.528064 121.913401H782.81934z"
              fill="#01DEE9"
              p-id="9810"
            ></path>
            <path
              d="M973.682623 296.689953H782.81934a15.569328 15.569328 0 0 1-13.901186-8.757747 15.847352 15.847352 0 0 1 1.946166-16.4034l96.196207-121.9134a16.264388 16.264388 0 0 1 24.744111 0l94.528064 121.9134a15.291305 15.291305 0 0 1 1.668142 16.264388 15.569328 15.569328 0 0 1-14.318221 8.896759z m-158.751543-31.138657h127.056839l-62.972372-81.182925z"
              fill="#484F59"
              p-id="9811"
            ></path>
          </svg>
        </div>
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              概率论与数理统计 <span>-&gt;</span>
            </h2>
            <p>深入研究探讨概率统计的世界</p>
          </a>
        </div>
      </main>
    </>
  );
}
