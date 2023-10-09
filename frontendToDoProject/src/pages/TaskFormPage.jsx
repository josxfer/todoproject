import { Card, Input, Textarea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const { createTask, updateTask, loadTask, errors: taskErrors } = useTasks();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    let task;

    if (!params.id) {
      task = await createTask(data);
    } else {
      task = await updateTask(params.id, data);
    }

    if (task) {
      navigate("/tasks");
    }
  });

  useEffect(() => {
    if (params.id) {
      loadTask(params.id).then((task) => {
        setValue("title", task.title);
        setValue("description", task.description);
      });
    }
  }, []);

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {taskErrors.map((error, i) => (
          <p className="text-red-500" key={i}>
            {error}{" "}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">
          {params.id ? "Editar tarea" : "Crear tarea"}
        </h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="title">Título</Label>
          <Input
            type="text"
            placeholder="Título"
            autoFocus
            {...register("title", {
              required: true,
            })}
          />
          {errors.title && (
            <span className="text-red-500">El título es requerido</span>
          )}

          <Label htmlFor="description">Descripción</Label>
          <Textarea
            placeholder="Descripción"
            rows={3}
            {...register("description")}
          ></Textarea>
          <Button>{params.id ? "Editar" : "Crear"}</Button>
        </form>
      </Card>
    </div>
  );
}

export default TaskFormPage;
