import React from "react";
import ArticleList from "../../Component/ArticleList";
import { Article } from "../../Component/ArticleViewer";
import CurrentIssueComponent from "../../Component/CurrentIssueComponent";
import Layout from "./PageLayout";

const exampleArticles: Article[] = [
  {
    id: "1",
    title: "Machine Learning Approaches in Climate Science",
    author: "Dr. Sarah Chen",
    keywords: [
      { id: "k1", text: "Machine Learning" },
      { id: "k2", text: "Climate" },
      { id: "k3", text: "Data Science" },
    ],
    content: [
      {
        type: "text",
        content:
          "Recent advances in machine learning have revolutionized our approach to climate science. This paper explores novel applications of deep learning models in predicting climate patterns and analyzing environmental data at unprecedented scales.",
      },
      {
        type: "image",
        url: "https://via.placeholder.com/150x100",
        caption: "ML model predictions vs actual climate data",
      },
      {
        type: "text",
        content:
          "Our research demonstrates that deep learning models, particularly transformers and convolutional neural networks, can achieve remarkable accuracy in predicting long-term climate trends. By analyzing historical climate data spanning over a century, these models have identified subtle patterns that traditional statistical methods often miss.",
      },
      {
        type: "text",
        content:
          "One significant finding is the ability of these models to detect early warning signs of extreme weather events weeks in advance. This breakthrough has immediate practical applications for disaster preparedness and climate resilience planning.",
      },
      {
        type: "image",
        url: "https://via.placeholder.com/150x100",
        caption: "Prediction accuracy comparison across different ML models",
      },
      {
        type: "text",
        content:
          "The implications of this research extend beyond mere prediction. By understanding the patterns these models identify, we gain new insights into the underlying mechanisms of climate change and their interconnections with various environmental factors.",
      },
    ],
  },
  {
    id: "2",
    title: "Quantum Computing: A New Era in Cryptography",
    author: "Prof. James Wilson",
    keywords: [
      { id: "k4", text: "Quantum" },
      { id: "k5", text: "Cryptography" },
      { id: "k6", text: "Computing" },
    ],
    content: [
      {
        type: "text",
        content:
          "The emergence of quantum computing poses both challenges and opportunities for modern cryptographic systems. This research examines the implications of quantum supremacy on current encryption methods and proposes new quantum-resistant protocols.",
      },
      {
        type: "text",
        content:
          "Current public-key cryptography systems, which form the backbone of internet security, are particularly vulnerable to quantum attacks. Using Shor's algorithm, a quantum computer could potentially break RSA encryption in hours rather than the billions of years it would take classical computers.",
      },
      {
        type: "image",
        url: "https://via.placeholder.com/150x100",
        caption: "Quantum circuit for Shor's algorithm",
      },
      {
        type: "text",
        content:
          "We propose a new family of post-quantum cryptographic algorithms based on lattice-based cryptography. These algorithms demonstrate resilience against both quantum and classical attacks while maintaining practical efficiency for real-world applications.",
      },
      {
        type: "text",
        content:
          "Our performance analysis shows that these new algorithms can be implemented efficiently on current hardware, making them viable candidates for immediate adoption in critical security systems.",
      },
    ],
  },
  {
    id: "3",
    title: "Sustainable Urban Development in the Digital Age",
    author: "Dr. Maria Rodriguez",
    keywords: [
      { id: "k7", text: "Urban Planning" },
      { id: "k8", text: "Sustainability" },
      { id: "k9", text: "Smart Cities" },
    ],
    content: [
      {
        type: "text",
        content:
          "As cities continue to grow, integrating digital technologies with sustainable development practices becomes crucial. This study presents a framework for implementing smart city solutions while maintaining environmental consciousness and social equity.",
      },
      {
        type: "image",
        url: "https://via.placeholder.com/150x100",
        caption: "Smart city infrastructure diagram",
      },
      {
        type: "text",
        content:
          "Our research examines case studies from five major cities that have successfully implemented smart technologies to reduce energy consumption, improve public transportation efficiency, and enhance quality of life for residents.",
      },
      {
        type: "text",
        content:
          "A key finding is the importance of participatory design in smart city initiatives. Cities that actively involved citizens in the planning and implementation phases showed significantly better outcomes in terms of technology adoption and overall satisfaction.",
      },
      {
        type: "image",
        url: "https://via.placeholder.com/150x100",
        caption: "Energy usage reduction after smart grid implementation",
      },
      {
        type: "text",
        content:
          "The study concludes with a comprehensive framework for sustainable urban development that balances technological innovation with environmental protection and social inclusion.",
      },
    ],
  },
  {
    id: "4",
    title: "Neural Networks in Medical Diagnosis",
    author: "Dr. Robert Chang",
    keywords: [
      { id: "k10", text: "Healthcare" },
      { id: "k11", text: "AI" },
      { id: "k12", text: "Neural Networks" },
    ],
    content: [
      {
        type: "text",
        content:
          "This paper examines the application of advanced neural networks in medical diagnosis, with particular focus on early disease detection and reduction of false positives in diagnostic imaging.",
      },
      {
        type: "text",
        content:
          "Our team developed a novel convolutional neural network architecture specifically designed for analyzing medical imaging data. Testing on a dataset of over 100,000 medical images showed a 15% improvement in early detection rates compared to traditional methods.",
      },
      {
        type: "image",
        url: "https://via.placeholder.com/150x100",
        caption: "Neural network architecture diagram",
      },
      {
        type: "text",
        content:
          "One of the most significant achievements was the reduction in false positive rates by 23%, while maintaining high sensitivity. This breakthrough has immediate implications for reducing unnecessary medical procedures and patient anxiety.",
      },
      {
        type: "text",
        content:
          "The system has been successfully deployed in three major hospitals, where it assists radiologists in screening for various conditions. Initial feedback from medical professionals has been overwhelmingly positive.",
      },
      {
        type: "image",
        url: "https://via.placeholder.com/150x100",
        caption: "Performance comparison with traditional methods",
      },
    ],
  },
];

const HomePage = () => {
  return (
    <Layout>
      <Layout.MainSection>
        <ArticleList articles={exampleArticles} />
      </Layout.MainSection>
      <Layout.SideSection>
        <CurrentIssueComponent />
      </Layout.SideSection>
    </Layout>
  );
};

export default HomePage;
