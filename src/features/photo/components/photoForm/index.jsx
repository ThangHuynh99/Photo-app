import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { Formik, Form, FastField } from 'formik';
import InputField from 'custome-fields/inputFiled';
import SelectField from 'custome-fields/SelectField';
import RandomPhotoField from 'custome-fields/randomPhotoField';

PhotoForm.propTypes = {
    // isAddMode: ,
    // initialValues: ,
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
};

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null,
    };

    return (
        <Formik 
        initialValues={initialValues}
        onSubmit={value => console.log("submit", value)}
        >
            {(formikProps) => {
                const { values, errors, touched } = formikProps;
                console.log(values, errors, touched);
                //do sth here
                return (
                    <Form>
                        <FastField name="title" 
                        component={InputField} 
                        label="Title" 
                        placeholder="eg: Wow nature..." 
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}
                            label="Category"
                            placeholder="What's your photo category"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                            <FastField
                                name="photo"
                                component={RandomPhotoField}
                                label="Photo"
                            />


                        <FormGroup>
                            <Button color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;
