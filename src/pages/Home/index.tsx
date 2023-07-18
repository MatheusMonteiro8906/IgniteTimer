import { Play, Target } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./Styles";
import { useState } from "react";
import {useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";

    const newCycleFormValidationSchema = zod.object({
        task: zod.string().min(1, 'Informe a tarefa'),
        minutesAmount: zod.number().min(5).max(60),
    });

export function Home(){

   const {register, handleSubmit, watch} = useForm({ resolver: zodResolver(newCycleFormValidationSchema),});

    function handleCreateNewCycle(data : any) {
        console.log(task, minutesAmount)
        }  

    const task =  watch('task');
    const minutesAmount =  watch('minutesAmount');
    const isSubmitDisabled = !task && !minutesAmount;
    console.log(!task, !minutesAmount);
    return (
       <HomeContainer>
        <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
            <FormContainer>

            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput type="text" list="taskSuggestions" id="task" placeholder="Dê um nome para o seu projeto" 
            {...register('task')}/> 

            <datalist id="taskSuggestions">
                <option>Estudo</option>
                <option>Trabalho</option>
                <option>Leitura</option>
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} 
            {...register('minutesAmount', {valueAsNumber: true})}/>

            <span>minutos.</span>
            </FormContainer>
        
         <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
         </CountdownContainer>

          <StartCountdownButton type="submit" disabled={isSubmitDisabled} name="teste"> <Play size={24}/> Começar</StartCountdownButton>
        </form>

       </HomeContainer>
    )
}