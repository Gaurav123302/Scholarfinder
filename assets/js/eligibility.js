// script.js

// Function to fetch scholarships based on eligibility
const fetchScholarships = async (formData) => {
    try {
      const response = await fetch('/api/scholarships', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch scholarships.');
      }
      
      const scholarships = await response.json();
      displayScholarships(scholarships);
    } catch (error) {
      console.error(error);
      // Handle error condition (e.g., display an error message)
    }
  };
   
  // Add event listener to "Check" button
  const checkButton = document.getElementById('submit');
  checkButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const form = document.getElementById('form');
    const formData = {
      income: form.querySelector('#income').value,
      nationality: form.querySelector('#nationality').value,
      caste: form.querySelector('#Choose-Caste').value,
      state: form.querySelector('#state').value,
      education: form.querySelector('#education').value,
      disability: form.querySelector('input[name="disability"]:checked')?.value || ''
    };
    
    fetchScholarships(formData);
  });
  