import { useEffect, useState } from 'react';
import { getPageData, savePageData } from '../axiosAPI.ts';


interface PageContent {
  title: string;
  content: string;
}

const Admin = () => {
  const [selected, setSelected] = useState<string>('about');
  const [page, setPage] = useState<PageContent>({title: '', content: ''});

  const pages:string[] = ['about', 'contacts', 'divisions', 'faq']

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPageData(selected);
        setPage(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [selected]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await savePageData(selected, page);
      alert('Saved Successfully!');
    } catch (error) {
      console.error(error);
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setPage(prevState => ({...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="container">
      <h4 className="mt-3">Edit page info:</h4>
      <form onSubmit={onSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="select" className="form-label">Name</label>
          <select
          id="select"
          name="select"
          className="form-select"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          >
            {pages.map((page) => (
              <option key={page} value={page}>{page}</option>
            ))}
          </select>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
          id="title"
          name="title"
          className="form-control"
          type="text"
          value={page?.title}
          onChange={onChange}/>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            id="content"
            name="content"
            className="form-control"
            value={page?.content}
            onChange={onChange}
            />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Save</button>
      </form>
    </div>
  )
}

export default Admin