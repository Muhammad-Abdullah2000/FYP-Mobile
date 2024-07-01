import { request, gql } from 'graphql-request';



const MASTER_URL = "Your Master URL";

const getCategory = async () => {
  const query = gql`
    query GetCategory {
        categories {
          id
          name
          icon {
            url
          }
          slug
        }
      }
      
    `

  const result = await request(MASTER_URL, query);
  return result;
};



const getCourseList = async () => {
  const query = gql`
  query MyQuery {
    courseLists(first: 50, orderBy: createdAt_DESC) {
      author
      description
      demoUrl
      free
      id
      name
      slug
      sourceCode
      tag
      youtubeUrl
      banner {
        url
      }
      chapter(first: 50) {
        ... on Chapter {
          id
          name
          video {
            url
          }
          shortDesc
        }
      }
    }
  }
  
`

  const result = await request(MASTER_URL, query);
  return result;
};

const getRelatedCourseList = async () => {
  const query = gql`
  query MyQuery {
    courseLists(first: 3, orderBy: createdAt_ASC) {
      author
      description
      demoUrl
      free
      id
      name
      slug
      sourceCode
      tag
      youtubeUrl
      banner {
        url
      }
      chapter(first: 50) {
        ... on Chapter {
          id
          name
          video {
            url
          }
          shortDesc
        }
      }
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result;
};


const getAllCourses = async () => {
  const query = gql`
  query MyQuery {
    courseLists(first: 100) {
      author
      name
      slug
      tag
      banner {
        url
      }
      description
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result;
};





export default {
  getCategory,
  getCourseList,
  getRelatedCourseList,
  getAllCourses
}