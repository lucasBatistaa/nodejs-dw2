import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAll = async () => {
    const allUsers = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    return allUsers
}

export const getById = async (id) => {

    const user = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    return user
}

export const create = async (user) => {
    const result = await prisma.user.create({
        data: user,
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    return result
}

export const remove = async (id) => {
    const user = await prisma.user.delete({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    
    return user
}

export const update = async (user) => {
    const result = await prisma.user.update({
        where: {
            id: user.id
        },
        data: user,
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return result
}

export const updateName = async (user) => {
    const result = await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            name: user.name,
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    
    return result
}