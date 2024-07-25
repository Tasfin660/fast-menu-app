import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Add = () => {
	const { authState } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!authState()) navigate('/unauthorized', { replace: true });
	}, [authState, navigate]);

	return <div>Add</div>;
};

export default Add;
