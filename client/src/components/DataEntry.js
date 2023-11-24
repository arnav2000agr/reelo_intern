import React, { useState } from 'react';
import './dataentry.css'

const DataEntry= ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    totalMarks: '',
    easyPercentage: '',
    mediumPercentage: '',
    hardPercentage: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Total Marks:
        <input
          type="number"
          name="totalMarks"
          value={formData.totalMarks}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Easy Percentage:
        <input
          type="number"
          name="easyPercentage"
          value={formData.easyPercentage}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Medium Percentage:
        <input
          type="number"
          name="mediumPercentage"
          value={formData.mediumPercentage}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Hard Percentage:
        <input
          type="number"
          name="hardPercentage"
          value={formData.hardPercentage}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Generate Question Paper</button>
    </form>
  );
};

export default DataEntry;
