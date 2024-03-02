"use client"
import axios from 'axios';
import React, { useState } from 'react'

export default function BlogTitle() {
    const [blogContent, setBlogContent] = useState('');

    const handleSubmit = async (e:{preventDefault:()=>void;}) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('/api/blog', { content: blogContent });
        console.log(response.data); // You can handle the response as needed

  
        // Optionally, you can reset the textarea content after successful submission
        setBlogContent('');
        
      } catch (error) {
        console.error('Error:', error);
      }
    };
  return (
    <div className="container">
        <div className="card offset col-6">
            <div className="card-header">
                <h3>Title</h3>
            </div>
            <form onSubmit={handleSubmit}>
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
            </form>
            
        </div>
    </div>
  )
}
