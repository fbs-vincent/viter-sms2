import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryData } from "../../../functions/custom-hooks/queryData";
import { apiVersion } from "../../../functions/functions-general";
import ModalWrapperSide from "../../../partials/modal/ModalWrapperSide";
import { FaTimesCircle } from "react-icons/fa";
import { Form, Formik } from "formik";
import { InputText } from "../../../functions/FormInputs";
import * as Yup from "yup";

const ModalAddStudents = ({ itemEdit, setIsOpen }) => {
  // THIS IS TO ANIMATE THE MODAL STATE
  const [animate, setAnimate] = React.useState("translate-x-full");

  //   THIS IS TO REFETCH THE READING DATA WHEN UPDATE IS HAPPENING
  const queryClient = useQueryClient();
  //   THIS IS THE UPDATE OR CREATE FUNCTION
  const mutation = useMutation({
    mutationFn: async (values) =>
      queryData(
        `${apiVersion}/controllers/developer/students/students.php`, // CREATE
        "post", // POST = CREATE
        values, // THE DATA TO BE SENT
      ),
    onSuccess: (data) => {
      if (data.success) {
        // IF SUCCESS SHOW THE MESSAGE
        alert("Successfuly added.");
        setIsOpen(false);
      } else {
        // IF THIS IS ERROR ALERT/SHOW THE ERROR MSG
        alert(data.error);
      }

      //   THIS IS TO REFETCH THE DATA AFTER UPDATE OR CREATE
      queryClient.invalidateQueries(["students"]);
    },
  });

  // THIS IS FOR THE INITIAL VALUES IN THE MODAL
  const initVal = {
    students_id: "",
    students_first_name: "",
    students_middle_name: "",
    students_last_name: "",
    students_grade: "",
    students_section: "",
  };

  // THIS CODE IS FOR VALIDATION IN THE FORM FIELD
  const yupSchema = Yup.object({
    students_id: Yup.string().trim().required("Required."),
    students_first_name: Yup.string().trim().required("Required."),
    students_middle_name: Yup.string().trim().required("Required."),
    students_last_name: Yup.string().trim().required("Required."),
    students_grade: Yup.string().trim().required("Required."),
    students_section: Yup.string().trim().required("Required."),
  });

  //   THIS IS THE FUNCTION TO CLOSE THE MODAL
  const handleClose = () => {
    // IF UPDATING IS PENDING DON'T CLOSE THE MODAL
    if (mutation.isPending) return;
    // ANIMATE THE MODAL
    setAnimate("translate-x-full");
    // DELAY AND CLOSE THE MODAL
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  React.useEffect(() => {
    // ANIMATE THE MODAL ENTRANCE
    setAnimate("");
  }, []);

  return (
    <>
      <ModalWrapperSide handleClose={handleClose} className={`${animate}`}>
        <div className="flex justify-between mb-4 px-3 pt-2">
          <h3 className="text-black/80 font-medium text-sm">Add Student</h3>
          <button
            className=" text-black/50 cursor-pointer"
            type="button"
            onClick={handleClose}
            disabled={mutation.isPending}
          >
            <FaTimesCircle className="text-sm" />
          </button>
        </div>
        <div className="modal-body">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form className="h-full">
                  <div className="modal-form-container">
                    <div className="modal-container">
                      {" "}
                      <div className="relative mb-6">
                        <InputText
                          label="Student ID"
                          name="students_id"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="First Name"
                          name="students_first_name"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="Middle Name"
                          name="students_middle_name"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="Last Name"
                          name="students_last_name"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="Grade"
                          name="students_grade"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="Section"
                          name="students_section"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>
                    <div className="modal-action">
                      {" "}
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="btn-modal-submit"
                      >
                        Add
                      </button>
                      <button
                        type="reset"
                        onClick={handleClose}
                        disabled={mutation.isPending}
                        className="btn-modal-cancel"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapperSide>
    </>
  );
};

export default ModalAddStudents;
