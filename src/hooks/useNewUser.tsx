import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { submitForm_CreateUser } from "../utils/CreateUser/submitForm_CreateUser";
import getPosition from "../services/RegisterUser/getPosition";
import getOptions from "../services/RegisterUser/getOptions";
import getSector from "../services/RegisterUser/getSector";
import { useLocation } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

export default function useNewUser() {
  const NameNewUserRef = useRef<HTMLInputElement>(null);
  const EmailNewUserRef = useRef<HTMLInputElement>(null);
  const PasswordNewUserRef = useRef<HTMLInputElement>(null);
  const TelNewUserRef = useRef<HTMLInputElement>(null);
  const cpfNewUserRef = useRef<HTMLInputElement>(null);
  const sectorNewUserRef = useRef<HTMLSelectElement>(null);
  const PositionNewUserRef = useRef<HTMLSelectElement>(null);
  const typeNewUserRef = useRef<HTMLSelectElement>(null);
  const [position, setPosition] = useState<any>([]);
  const [options, setOptions] = useState<any>([]);
  const [sector, setSector] = useState<any>([]);
  const [userData, setUserData] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUserData(location.state);
    }
  }, [location.state]);

  const fetchData = async () => {
    try {
      const DataPosition = await getPosition();
      const DataOptions = await getOptions();
      const DataSector = await getSector();

      setPosition(DataPosition);
      setOptions(DataOptions);
      setSector(DataSector);
    } catch (error) {
      console.error("Failed to fetch POSITION:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   const navigate = useNavigate();
  const { register, handleSubmit } = useForm<any>();

  const onSubmit = (e: any) => {
    submitForm_CreateUser(
      e,
      NameNewUserRef,
      EmailNewUserRef,
      PasswordNewUserRef,
      TelNewUserRef,
      typeNewUserRef,
      cpfNewUserRef,
      sectorNewUserRef,
      PositionNewUserRef,
      userData,
      handleSubmit,
    );
  };

  return {
    NameNewUserRef,
    EmailNewUserRef,
    PasswordNewUserRef,
    TelNewUserRef,
    typeNewUserRef,
    options,
    sector,
    position,
    onSubmit,
    register,
    handleSubmit,
    cpfNewUserRef,
    sectorNewUserRef,
    PositionNewUserRef,
    userData,
  };
}
