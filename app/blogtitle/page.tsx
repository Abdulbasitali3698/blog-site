"use client"
import axios from 'axios';
import React, { useState } from 'react'

export default function BlogTitle() {
    const [blogContent, setBlogContent] = useState('');
    const[title,SetTitle]=useState("");

    const handleSubmit = async (e:{preventDefault:()=>void;}) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('/api/blog/submit', { content: blogContent ,title});
        console.log(response.data); // You can handle the response as needed

  
        // Optionally, you can reset the textarea content after successful submission
        setBlogContent('');
        SetTitle("");
        
      }
       catch (error) {
        console.error('Error:', error);
      }
    };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
          <div className="card offset col-6">
              <div className="card-header">
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Title</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" value={title} placeholder="Enter Title"onChange={(e)=>SetTitle(e.target.value)}/>
                  </div>
                </div>    
              </div>
                  <div className="card-body">
                      <div className="form-floating">
                          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                          value={blogContent}
                          onChange={(e) => setBlogContent(e.target.value)}></textarea>
                          <label htmlFor="floatingTextarea2">Comments</label><br />
                      </div>
                  </div>
                  <div className="card-footer d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary ml-auto">Submit</button>
                  </div>
              
              
          </div>
      </div>
    </form>
  )
}
