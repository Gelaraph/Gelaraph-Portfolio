import { useState } from 'react';
import Button from '../../components/UIElements/Button/Button';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import './contact.css';
import TextInput from './TextInput';
import TextArea from './TextArea';

const Contact = () => {
  const [state, setState] = useState({
    name: {
      name: 'name',
      value: '',
      focus: false,
    },
    email: {
      name: 'email',
      value: '',
      focus: false,
    },
    message: {
      name: 'message',
      value: '',
      focus: false,
    },
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    // subject: "",
    message: '',
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const [submissionSuccessful, setSubmissionSuccessful] =
    useState(false);

  const [submissionError, setSubmissionError] = useState(null);

  const [loading, setLoading] = useState(false);

  function handleFocus(e) {
    const name = e.target.name;
    const updatedState = { ...state };
    updatedState[name].focus = true;
    setState(updatedState);
  }

  function handleBlur(e) {
    const name = e.target.name;
    const updatedState = { ...state };
    updatedState[name].focus = false;
    setState(updatedState);
  }

  function handleChange(e) {
    const name = e.target.name;
    const updatedState = { ...state };
    updatedState[name].value = e.target.value;
    setState(updatedState);

    // clear error for the field when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

    // check if all required fields have been filled
    const { name: nameField, email, message } = updatedState;
    const isFormValid =
      nameField.value.trim() !== '' &&
      email.value.trim() !== '' &&
      // subject.value.trim() !== "" &&
      message.value.trim() !== '';
    setFormIsValid(isFormValid);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // set loading state to true
    setLoading(true);

    // perform validation
    const { name, email, subject, message } = state;
    const validationErrors = {};

    if (!name.value.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!email.value.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!message.value.trim()) {
      validationErrors.message = 'Message is required';
    }

    // update errors state
    if (Object.values(validationErrors)?.length) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    // update formIsValid state
    const isFormValid =
      name.value.trim() !== '' &&
      email.value.trim() !== '' &&
      message.value.trim() !== '';
    setFormIsValid(isFormValid);

    if (isFormValid) {
      // prepare data to send
      const data = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      }
        .then((data) => {
          // reset form fields
          setState({
            name: {
              ...state.name,
              value: '',
            },
            email: {
              ...state.email,
              value: '',
            },
            subject: {
              ...state.subject,
              value: '',
            },
            message: {
              ...state.message,
              value: '',
            },
          });
          // reset loading state
          setLoading(false);
          // show success message
          setSubmissionSuccessful(true);
          window.alert('Your message has been sent successfully!');
          setSubmissionError(null);
        })
        .catch((error) => {
          // show error message
          setLoading(false);
          window.alert(
            'There were errors in the form. Please fix them and try again.',
          );
          setSubmissionSuccessful(false);
        });
    }
  }

  const { name, email, message, subject } = state;

  return (
    <BaseLayout>
      <div className="contact-container">
        <div className="">
          <h1 className="contact-title">
            Have a question or want to work together?
          </h1>
        </div>

        <div className="form-container">
          {submissionSuccessful && (
            <div className="success-message">
              {submissionSuccessful}
            </div>
          )}
          {submissionError && (
            <div className="error-message">{submissionError}</div>
          )}

          <form
            acceptCharset="UTF-8"
            action=""
            method="POST"
            onSubmit={handleSubmit}>
            <div className="contact-input-container">
              <div>
                <div>
                  <label htmlFor="name">Name</label>
                </div>
                <TextInput
                  className="contact-input"
                  id="name"
                  {...name}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.name}
                />
              </div>

              <div>
                <div>
                  <label htmlFor="email" type="text">
                    Email
                  </label>
                </div>
                <TextInput
                  className="contact-input"
                  id="email"
                  type="email"
                  {...email}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>
            </div>

            <div className="textarea-cont">
              <label htmlFor="message">Message</label>
              <TextArea
                className="textarea"
                id="message"
                type="text"
                {...message}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.message}
              />
            </div>

            <div className="contact-btn">
              <Button loading={loading} type="submit">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Contact;
