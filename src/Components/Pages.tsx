import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPageData } from '../axiosAPI.ts';

interface PageContent {
  title: string;
  content: string;
}

const Pages = () => {
  const {pageName} = useParams<{pageName: string}>()
  const [page, setPage] = useState<PageContent | null>(null)

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        if(pageName) {
          const response = await getPageData(pageName);
          console.log("Page data:", response.data);
          setPage(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPageData()
  }, [pageName])


  return (
    <div className="container">
      <h3>{page?.title}</h3>
      <h4>{page?.content}</h4>
    </div>
  )
}

export default Pages;