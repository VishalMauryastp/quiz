'use server';

import { signIn } from "../../auth";


/**
 * Login user by credentials
 * @param {*} values
 * @returns
 */

export const LoginUser = async (values) => {
    /**
     * Implement here own logic for user login.
     * i.e fetch user by email form api or database.
     */
    const user = {
        first_name: 'John',
        last_name: 'Due',
        username: 'johndue123',
        email: 'johndue@gmail.com',
        phone_number: '9112345678',
        password: 'test@1234',
        image: null,
        role: 'admin'
    };


    let res = {
        status: 200,
        result: true,
    };

    if (!user) {
        res.message = 'Invalid email or password from server side';
        res.result = false;
    } else {
        res.user = user;
    }

    return res;
};

export const handleCredentialLogin = async (values) => {
    try {
        await signIn('credentials', { redirect: false, ...values });
        return { status: 200, result: true };
    } catch (error) {
        // Catch error message with throw form auth.js file
        const err = {
            status: 200,
            result: false,
            message: error.cause,
        };
        return err;
    }
};