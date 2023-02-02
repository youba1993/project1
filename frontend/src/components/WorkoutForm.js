import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";
function WorkoutForm() {
    const { dispatch } = useWorkoutContext()
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const { user } = useAuthContext();

    // const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const workout = { title, load, reps };
        const response = await fetch('/api/workouts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${user.token}`
            },
            body: JSON.stringify(workout)
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
            // setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
            setError(null);
            setLoad('');
            setReps('');
            setTitle('');
            // setEmptyFields([]);
            console.log('new workout added ', json);
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout </h3>

            <label>Excercise Title:</label>
            <input
                required
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            // className={!!emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Load (in kg):</label>
            <input
                required
                type='number'
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            // className={!!emptyFields.includes('load') ? 'error' : ''}
            />

            <label>Reps:</label>
            <input
                required
                type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            // className={!!emptyFields.includes('reps') ? 'error' : ''}
            />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>


    )
}

export default WorkoutForm;