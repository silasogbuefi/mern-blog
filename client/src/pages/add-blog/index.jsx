import { useContext, useEffect } from 'react'
import classes from './styles.module.css'
import { GlobalContext } from '../../context'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'

export default function AddNewBlog() {


    const { formData, setFormData, setIsEdit, isEdit } = useContext(GlobalContext);
    const navigate = useNavigate()
    const location = useLocation()


    async function handleSaveNoteToDb() {

        const response = isEdit ? await axios.put(`http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`, {
            title: formData.title,
            description: formData.description
        }) : await axios.post('http://localhost:5000/api/blogs/add', {
            title: formData.title,
            description: formData.description
        })

        const result = await response.data;

        if (result) {
            setIsEdit(false)
            setFormData({
                title: '',
                description: ''
            })
            navigate("/")
        }

    }

    useEffect(() => {
        console.log(location);
        if (location.state) {
            const { getCurrentBlogItem } = location.state;
            setIsEdit(true)
            setFormData({
                title: getCurrentBlogItem.title,
                description: getCurrentBlogItem.description
            })
        }

    }, [location])


    return <div className={classes.wrapper}>
        <h1>{isEdit ? 'edit a blog' : 'add a blog'}</h1>
        <div className={classes.formWrapper}>
            <input
                name='title'
                placeholder='enter note title'
                id='title'
                type='text'
                value={formData.title}
                onChange={(e) => setFormData({
                    ...formData,
                    title: e.target.value
                })}
            />
            <textarea
                name='description'
                placeholder='enter note description'
                id='description'
                value={formData.description}
                onChange={(event) => setFormData({
                    ...formData,
                    description: event.target.value
                })}
            />
            <button onClick={handleSaveNoteToDb}>{isEdit ? 'edit blog': 'add blog'}</button>
        </div>
    </div>
}