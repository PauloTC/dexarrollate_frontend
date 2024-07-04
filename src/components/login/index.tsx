"use client";
import Image from "next/image";
import LoginForm from "./loginform";

const LoginComponent = () => {
  return (
    <div className="dl-flex dl-flex-col lg:dl-flex-row">
      <div
        className="
          dl-bg-center
          dl-bg-no-repeat
          dl-h-48
          dl-w-full
          lg:dl-h-screen
          dl-relative
        "
      >
        <Image
          alt="banner-plants"
          layout="fill"
          className="dl-z-10 "
          objectFit="cover"
          src="/login/login-plantas.png"
        />
        <Image
          alt="banner"
          layout="fill"
          objectFit="cover"
          src="/login/login-personaje.png"
        />
      </div>
      <div
        className="
          dl-py-10
          dl-max-w-lg
          dl-container
          dl-flex
          dl-justify-center
          dl-items-center
        "
      >
        <div className="dl-w-full lg:dl-px-14 xl:dl-px-20">
          <Image
            className="dl-mb-6"
            alt="logo"
            width={168}
            height={20}
            src="/dexarrollate.svg"
          />
          <h3 className="dl-text-2xl dl-font-semibold dl-mb-6">Bienvenido</h3>

          <LoginForm />

          <p className="dl-text-sm dl-text-center">
            Si no puedes ingresar, envíanos un correo a
            <strong className="dl-font-bold"> contacto@alicorp.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
