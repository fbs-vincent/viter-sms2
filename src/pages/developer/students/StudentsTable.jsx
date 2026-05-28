import React from "react";
// src/components/students/StudentsTable.jsx
// import ResponsiveTable from "../ui/ResponsiveTable";
import {
  FaArchive,
  FaEdit,
  FaTrash,
  FaTrashRestore,
  FaUser,
} from "react-icons/fa";
import useQueryData from "../../../functions/custom-hooks/useQueryData";
import { apiVersion, handleAction } from "../../../functions/functions-general";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import ResponsiveTable from "../ResponsiveTable";

const studentColumns = [
  {
    key: "name",
    header: "Name",
    render: (student) => (
      <div className="flex items-center gap-3">
        <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center">
          <FaUser className="text-blue-600 text-sm" />
        </div>
        <div>
          <p className="font-medium">{student.name}</p>
          <p className="text-xs text-gray-500 xl:hidden">{student.studentId}</p>
        </div>
      </div>
    ),
    mobileLabel: null,
  },
  {
    key: "studentId",
    header: "Student ID",
    render: (student) => <p>{student.studentId}</p>,
    mobileLabel: null,
  },
  {
    key: "grade",
    header: "Grade & Section",
    render: (student) => (
      <p className="xl:px-2 xl:py-1 xl:text-xs xl:font-semibold xl:rounded-lg xl:bg-blue-100 xl:text-blue-700 xl:inline text-sm">
        {student.gradeSection}
      </p>
    ),
    mobileLabel: "Grade & Section",
  },
  {
    key: "status",
    header: "Status",
    render: (student) => (
      <p className={`statusBadge status${student.status}`}>{student.status}</p>
    ),
    mobilePosition: "topRight",
  },
  {
    key: "actions",
    header: "Actions",
    render: (student) => {
      return (
        <div className="flex gap-2">
          {student.students_is_active ? (
            <>
              <button
                onClick={() =>
                  handleAction(student.setIsAdd, student.setItemEdit, student)
                }
                type="button"
                className="cursor-pointer text-blue-600 hover:text-blue-800 tooltip-action"
                data-tooltip="Edit"
              >
                <FaEdit />
              </button>
              <button
                onClick={() =>
                  handleAction(
                    student.setIsArchive,
                    student.setItemEdit,
                    student,
                  )
                }
                type="button"
                className="cursor-pointer text-orange-600 hover:text-orange-800 tooltip-action"
                data-tooltip="Archive"
              >
                <FaArchive />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() =>
                  handleAction(
                    student.setIsRestore,
                    student.setItemEdit,
                    student,
                  )
                }
                type="button"
                className="cursor-pointer text-orange-600 hover:text-orange-800 tooltip-action"
                data-tooltip="Restore"
              >
                <FaTrashRestore />
              </button>
              <button
                onClick={() =>
                  handleAction(
                    student.setIsDelete,
                    student.setItemEdit,
                    student,
                  )
                }
                type="button"
                className="cursor-pointer text-red-600 hover:text-red-800 tooltip-action"
                data-tooltip="Delete"
              >
                <FaTrash />
              </button>
            </>
          )}
        </div>
      );
    },
    mobilePosition: "bottomRight",
  },
];

const StudentsTable = ({ setItemEdit, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const {
    isLoading: isLoadingStudents,
    isFetching: isFetchingStudents,
    error: errorStudents,
    data: dataStudents,
  } = useQueryData(
    `${apiVersion}/controllers/developer/students/students.php`, // api path
    "get", // method
    "students", // key
  );

  const studentArray =
    dataStudents?.data.map((item) => {
      return {
        ...item,
        id: item.students_aid,
        name: `${item.students_first_name} ${item.students_last_name}`,
        studentId: `${item.students_id}`,
        gradeSection: `${item.students_grade} - ${item.students_section}`,
        status: item.students_is_active ? "Active" : "Inactive",
        setItemEdit,
        setIsAdd: (val) => dispatch(setIsAdd(val)),
        setIsArchive: (val) => dispatch(setIsArchive(val)),
        setIsRestore: (val) => dispatch(setIsRestore(val)),
        setIsDelete: (val) => dispatch(setIsDelete(val)),
      };
    }) ?? [];

  return (
    <ResponsiveTable
      isLoading={isLoadingStudents}
      isFetching={isFetchingStudents}
      error={errorStudents}
      data={studentArray}
      columns={studentColumns}
      dataItem={itemEdit}
      // queryKey="students" // FOR ONE RECORDS REFETCHING
      queryKey={["students"]} // FOR MULTIPLE RECORDS REFETCHING
      pathUrl={`/controllers/developer/students`} // this is for archive, restore, delete path api
    />
  );
};

export default StudentsTable;
