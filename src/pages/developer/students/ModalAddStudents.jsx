import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryData } from "../../../functions/custom-hooks/queryData";
import { apiVersion } from "../../../functions/functions-general";
import ModalWrapperSide from "../../../partials/modal/ModalWrapperSide";
import { FaTimesCircle } from "react-icons/fa";
import { Form, Formik } from "formik";
import { InputText } from "../../../functions/FormInputs";

const ModalAddStudents = ({ itemEdit, setIsOpen }) => {
  // THIS IS TO ANIMATE THE MODAL STATE
  const [animate, setAnimate] = React.useState("translate-x-full");

  //   THIS IS TO REFETCH THE READING DATA WHEN UPDATE IS HAPPENING
  const queryClient = useQueryClient();
  //   THIS IS THE UPDATE OR CREATE FUNCTION
  const mutation = useMutation({
    mutationFn: async (values) =>
      queryData(
        `${apiVersion}/controller/developer/students.php`, // CREATE
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
            initialValues={{}}
            validationSchema={null}
            onSubmit={() => {}}
          >
            {(props) => {
              return (
                <Form>
                  <div className="relative mb-6">
                    <InputText
                      label="Student ID"
                      name="students_id"
                      disabled={mutation.isPending}
                    />
                    {/* <InputText label="Student ID" name="students_id /> */}
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
