import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { FormEventHandler } from "react";

interface Department {
    id: number;
    name: string;
    description?: string;
}

interface PageProps {
    departments: Department[];
}

export default function Register({ departments }: PageProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        role: "",
        department_id: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-6">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">
                    Daftar Akun
                </h2>
            </div>
            <form onSubmit={submit} className="space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="flex items-center w-full gap-4">
                    <div className="w-full">
                        <InputLabel htmlFor="department" value="Department" />
                        <Select
                            onValueChange={(value) =>
                                setData("department_id", value)
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a department" />
                            </SelectTrigger>
                            <SelectContent>
                                {departments.map((department) => (
                                    <SelectItem
                                        key={department.id}
                                        value={String(department.id)}
                                    >
                                        {department.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError
                            message={errors.department_id}
                            className="mt-2"
                        />
                    </div>

                    <div className="w-full">
                        <InputLabel htmlFor="role" value="Role" />
                        <Select
                            onValueChange={(value) => setData("role", value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Admin">Admin</SelectItem>
                                <SelectItem value="Manager">Manager</SelectItem>
                                <SelectItem value="Pegawai">Pegawai</SelectItem>
                                <SelectItem value="SPV">Supervisor</SelectItem>
                            </SelectContent>
                        </Select>
                        <InputError message={errors.role} className="mt-2" />
                    </div>
                </div>

                <div className="flex items-center w-full gap-4">
                    <div className="w-full">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            name="password"
                            type="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />
                        <TextInput
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={processing}
                    >
                        Sign up
                    </Button>
                </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-semibold leading-6 text-primer-600 hover:text-primer-500"
                >
                    Sign in here
                </Link>
            </p>
        </GuestLayout>
    );
}
