import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

//  dashboard
const Dashboard = lazy(() => import("./dashboard"));

// course
const Course = lazy(() => import("./dashboard/course"));
const AddCourse = lazy(() => import("./dashboard/course/addCourse"));
const CourseMaterials = lazy(
  () => import("./dashboard/course/courseMaterials")
);
const Cources = lazy(() => import("./dashboard/course/cources"));

// exam
const Exam = lazy(() => import("./dashboard/exam"));
const AddExam = lazy(() => import("./dashboard/exam/addExam"));
const EndExam = lazy(() => import("./dashboard/exam/endExam"));
const Exams = lazy(() => import("./dashboard/exam/exam"));

// feedback
const Feedback = lazy(() => import("./dashboard/feedback"));
const AddFeedback = lazy(() => import("./dashboard/feedback/addFeedback"));
const RemoveFeedback = lazy(
  () => import("./dashboard/feedback/removeFeedback")
);
const Feedbacks = lazy(() => import("./dashboard/feedback/feedback"));

// statistic
const Statistic = lazy(() => import("./dashboard/Statistic"));
const ViewStatistic = lazy(() => import("./dashboard/Statistic/viewStatistic"));
const Statistics = lazy(() => import("./dashboard/Statistic/Statistic"));

// library
const Library = lazy(() => import("./dashboard/library"));
const Librarian = lazy(() => import("./dashboard/library/librarian"));
const Addbook = lazy(() => import("./dashboard/library/addbook"));
const RemoveBook = lazy(() => import("./dashboard/library/removeBook"));

// notification
const Notification = lazy(() => import("./dashboard/notification"));
const SendNotification = lazy(
  () => import("./dashboard/notification/sendNotification")
);
const Notifications = lazy(
  () => import("./dashboard/notification/notification")
);

// payments
const Payment = lazy(() => import("./dashboard/payment"));
const Payments = lazy(() => import("./dashboard/payment/payments"));
const AddPayment = lazy(() => import("./dashboard/payment/addPayment"));
const PaymentHistory = lazy(() => import("./dashboard/payment/paymentHistory"));

// profile
const Profile = lazy(() => import("./dashboard/profile"));
const Name = lazy(() => import("./dashboard/profile/name"));
const Email = lazy(() => import("./dashboard/profile/email"));
const Profiles = lazy(() => import("./dashboard/profile/profile"));

// report
const Reports = lazy(() => import("./dashboard/reports"));
const AddReport = lazy(() => import("./dashboard/reports/addReport"));
const RemoveReport = lazy(() => import("./dashboard/reports/removeReport"));
const Report = lazy(() => import("./dashboard/reports/reports"));

// students
const Students = lazy(() => import("./dashboard/students"));
const Student = lazy(() => import("./dashboard/students/student"));
const AddStudent = lazy(() => import("./dashboard/students/addStudent"));
const RemoveStudent = lazy(() => import("./dashboard/students/removeStudent"));

// teachers
const Teacher = lazy(() => import("./dashboard/teacher"));
const Teachers = lazy(() => import("./dashboard/teacher/teachers"));
const AddTeacher = lazy(() => import("./dashboard/teacher/addTeacher"));
const RemoveTeacher = lazy(() => import("./dashboard/teacher/removeTeacher"));

const MainRouters = () => {
  return (
    <Suspense>
      {useRoutes([
        {
          path: "/",
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
              children: [
                {
                  path: "/dashboard",
                  element: <Statistic />,
                  children: [
                    { index: true, element: <Statistics /> },
                    { path: "viewStatistic", element: <ViewStatistic /> },
                  ],
                },
                {
                  path: "courses",
                  element: <Course />,
                  children: [
                    { index: true, element: <Cources /> },
                    { path: "addCourses", element: <AddCourse /> },
                    { path: "courseMaterials", element: <CourseMaterials /> },
                  ],
                },
                {
                  path: "exam",
                  element: <Exam />,
                  children: [
                    { index: true, element: <Exams /> },
                    { path: "addExam", element: <AddExam /> },
                    { path: "endExam", element: <EndExam /> },
                  ],
                },
                {
                  path: "feedback",
                  element: <Feedback />,
                  children: [
                    { index: true, element: <Feedbacks /> },
                    { path: "addFeedback", element: <AddFeedback /> },
                    { path: "removeFeedback", element: <RemoveFeedback /> },
                  ],
                },
                {
                  path: "library",
                  element: <Library />,
                  children: [
                    { index: true, element: <Librarian /> },
                    { path: "addBook", element: <Addbook /> },
                    { path: "removeBook", element: <RemoveBook /> },
                  ],
                },
                {
                  path: "notification",
                  element: <Notification />,
                  children: [
                    { index: true, element: <Notifications /> },
                    { path: "sendNotification", element: <SendNotification /> },
                  ],
                },
                {
                  path: "payment",
                  element: <Payment />,
                  children: [
                    { index: true, element: <Payments /> },
                    { path: "addPayment", element: <AddPayment /> },
                    { path: "paymentHistory", element: <PaymentHistory /> },
                  ],
                },
                {
                  path: "profile",
                  element: <Profile />,
                  children: [
                    { index: true, element: <Profiles /> },
                    { path: "name", element: <Name /> },
                    { path: "email", element: <Email /> },
                  ],
                },
                {
                  path: "reports",
                  element: <Reports />,
                  children: [
                    { index: true, element: <Report /> },
                    { path: "addReport", element: <AddReport /> },
                    { path: "removeReport", element: <RemoveReport /> },
                  ],
                },
                {
                  path: "students",
                  element: <Students />,
                  children: [
                    { index: true, element: <Student /> },
                    { path: "addStudent", element: <AddStudent /> },
                    { path: "removeStudent", element: <RemoveStudent /> },
                  ],
                },
                {
                  path: "teacher",
                  element: <Teacher />,
                  children: [
                    { index: true, element: <Teachers /> },
                    { path: "addTeacher", element: <AddTeacher /> },
                    { path: "removeTeacher", element: <RemoveTeacher /> },
                  ],
                },
              ],
            },
          ],
        },
      ])}
    </Suspense>
  );
};

export default React.memo(MainRouters);
