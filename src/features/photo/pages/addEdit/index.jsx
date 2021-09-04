import Banner from 'components/banner';
import PhotoForm from 'features/photo/components/photoForm';
import React from 'react';
import './styles.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
    return (
        <div>
            <Banner title="Pick your amazing photo 😎" />
            <div className="photo-edit__form">
                <PhotoForm />
            </div>
        </div>
    );
}

export default AddEditPage;
