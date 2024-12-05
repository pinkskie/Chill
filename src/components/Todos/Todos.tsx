import { useGetTodosQuery } from "../../store/services/todos";
import styles from "./Todos.module.scss";
import { RootState } from "../../store/types/common";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { setTodos } from "../../store/slices";

export const Todos = () => {
    const { data, isLoading, isError } = useGetTodosQuery();

    const todos = useAppSelector((state: RootState) => state.slices.todos);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTodos(data));
    }, [data]);

    console.log(todos);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    return (
        <ul>
            {data?.map((item) => (
                <li className={styles.todo} key={item.id}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.body}</p>
                </li>
            ))}
        </ul>
    );
};
