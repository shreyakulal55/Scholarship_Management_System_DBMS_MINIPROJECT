import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import ScholarshipDetails from './components/ScholarshipDetails';
import UpdateStatusForm from './components/UpdateStatusForm';
import Login from './components/Login';
import ScholarshipsPage from './components/ScholarshipsPage';
import StudentDetailsPage from './components/StudentDetailsPage';

import AddScholarship from './components/AddScholarship';
import UpdateScholarship from './components/UpdateScholarship';
import ReadAllScholarships from './components/ReadAllScholarships';
import DeleteScholarship from './components/DeleteScholarship';

import AddNewAgency from './components/AddNewAgency';
import UpdateExistingAgency from './components/UpdateExistingAgency';
import ReadAllAgencies from './components/ReadAllAgencies';
import DeleteParticularAgency from './components/DeleteParticularAgency';
const AppRoutes = () => {
  return (

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        <Route path="/scholarship/:id" element={<ScholarshipDetails />} />
        <Route path="/update-status" element={<UpdateStatusForm />} />
        <Route path="/scholarships" element={<ScholarshipsPage />} />
        <Route path="/student-details" element={<StudentDetailsPage />} />

        <Route path="/scholarships/add" element={<AddScholarship />} />
      <Route path="/scholarships/update" element={<UpdateScholarship />} />
      <Route path="/scholarships/read" element={<ReadAllScholarships />} />
      <Route path="/scholarships/delete" element={<DeleteScholarship />} />
      <Route path="/agency/add" element={<AddNewAgency />} />
      <Route path="/agency/update" element={<UpdateExistingAgency />} />
      <Route path="/agency/read" element={<ReadAllAgencies />} />
      <Route path="/agency/delete" element={<DeleteParticularAgency />} />

        {/* Default route - Redirect to the login page for undefined routes */}
        <Route path="*" element={<Login />} />
      </Routes>

  );
};

export default AppRoutes;
