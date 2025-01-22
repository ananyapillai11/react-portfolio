import project1 from "../assets/projects/1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/3.png";
import project4 from "../assets/projects/5.jpeg";
import project5 from "../assets/projects/project-3.jpg";
import project6 from "../assets/projects/6.png";


export const HERO_CONTENT = `I am a driven and innovative professional with expertise in frontend development and a strong interest in data science and AI & ML. With experience in crafting dynamic web applications using React, HTML, CSS, and JavaScript, I have also applied my skills to data-driven projects involving machine learning and predictive modeling. My ability to design and implement algorithms, work with ML tools, and analyze large datasets has enabled me to create impactful solutions. I am passionate about integrating cutting-edge AI techniques, including generative models, into practical applications. My goal is to contribute to innovative projects that leverage AI to drive meaningful business outcomes.`;

export const ABOUT_TEXT = `I’m a developer with a strong passion for research in AI, ML, and predictive analysis. I enjoy exploring how these technologies can solve real-world problems, particularly in predictive analytics, where I work on creating models to forecast trends and enhance decision-making. My curiosity and drive push me to constantly learn and apply new techniques.

I thrive in collaborative environments, working with teams to build effective solutions. Outside of work, I enjoy reading, singing, and playing table tennis—hobbies that help me stay refreshed and energized.

Book Recommendation: The Power of Your Subconscious Mind by Dr. Joseph Murphy.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Oct 2023",
    role: "Intern - Data Engineer",
    company: "Allianz Technology",
    description: `Developed an interactive web app with a responsive UI using HTML5, CSS3, and JavaScript. Key features included image file uploads, checkbox-based parameter selection, and displays for original images. Utilized Python Flask for backend image processing. Focused on user-friendly UI elements and seamless functionality for an optimal user experience. Collaborated with stakeholders to define project requirements and timelines, and contributed to the OCR project’s UI to ensure a responsive design.`,
    technologies: ["Javascript", "HTML", "CSS", "MySQL", "Bootstrap"],
  },

];

export const PROJECTS = [
  {
    title: "Heart Disease Prediction",
    image: project1,
    description:
      "A machine learning-based approach to predicting heart diseases using algorithms like Random Forest, Logistic Regression, Naïve Bayes, and Artificial Neural Networks, achieving an accuracy of up to 89%.",
    technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
  },
  {
    title: "Stock Price Prediction",
    image: project2,
    description:
      "A comprehensive study exploring the predictive capabilities of Fuzzy Inference Systems (FIS) for stock price forecasting. This project compares Sugeno FIS, Mamdani FIS, and Adaptive Neuro-Fuzzy Inference System (ANFIS), with Gradient Descent Optimization enhancing model accuracy. Visualizations and performance metrics like RMSE, MAE, and R² highlight ANFIS's superior ability to adapt to stock trends.",
    technologies: ["Python", "Gradient Descent", "skfuzzy", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Souled Store Clone",
    image: project3,
    description:
      "A responsive clone of The Souled Store website built using modern web technologies. The project includes a Home Page, Products Page, About Page, and Contact Page, focusing on replicating the site's core layout and design. Emphasis was placed on responsiveness and interactivity, ensuring a seamless user experience across devices.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Twitter Sentiment Analysis",
    image: project4,
    description:
      "This project performs sentiment analysis on Twitter data using machine learning and natural language processing (NLP) techniques. It preprocesses tweets, converts sentiment labels, and uses TF-IDF for feature extraction. Logistic Regression is employed for classification, achieving accurate sentiment predictions to support decision-making for businesses and researchers.",
    technologies: ["Python", "NumPy", "Pandas", "NLTK", "Scikit-learn"],
  },
  {
    title: "Echocardiogram Analysis",
    image: project5,
    description:
      "This project analyzes echocardiogram data to predict survival status using machine learning models. It involves exploratory data analysis, preprocessing (handling missing values, encoding categorical variables, and scaling features), and building classifiers such as Random Forest, Logistic Regression, Naïve Bayes, XGBoost, and more. The models are evaluated based on metrics like accuracy, confusion matrices, and classification reports, with feature importance visualized for insights.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn"],
  },
  {
    title: "Face Generation using GANs",
    image: project6,
    description:
      "A project utilizing Generative Adversarial Networks (GANs) to generate realistic human face images. Built with TensorFlow and trained on the CelebA dataset, it features a Generator that creates images from random noise and a Discriminator that classifies images as real or fake. Includes data preprocessing, GAN architecture implementation, and visualization of generated faces during training.",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
  },
];

export const CONTACT = {
  address: "Trivandrum, Kerala ",
  phoneNo: "+91 920-703-9949 ",
  email: "ananyarpillai@gmail.com",
};
