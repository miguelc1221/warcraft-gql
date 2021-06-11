/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import { Context } from './../src/api/context'

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Class: {
    // root type
    armorType?: string[] | null // [String!]
    combatRoles?: string[] | null // [String!]
    crestSrc?: string | null // String
    feature?: NexusGenRootTypes['Feature'][] | null // [Feature!]
    id?: number | null // Int
    info?: string | null // String
    introDescription?: string | null // String
    introTitle?: string | null // String
    name?: string | null // String
    race?: NexusGenRootTypes['Race'][] | null // [Race!]
    resources?: string[] | null // [String!]
    specialization?: NexusGenRootTypes['Specialization'][] | null // [Specialization!]
    weapons?: string[] | null // [String!]
  }
  Feature: {
    // root type
    class?: NexusGenRootTypes['Class'] | null // Class
    description?: string | null // String
    id?: number | null // Int
    name?: string | null // String
  }
  Query: {}
  Race: {
    // root type
    cityDescription?: string | null // String
    cityName?: string | null // String
    crestSrc?: string | null // String
    faction?: string | null // String
    historyDescription?: string | null // String
    historyTitle?: string | null // String
    id?: number | null // Int
    introDescription?: string | null // String
    introTitle?: string | null // String
    mountDescription?: string | null // String
    mountName?: string | null // String
    name?: string | null // String
    traits?: Array<NexusGenRootTypes['Trait'] | null> | null // [Trait]
    type?: string | null // String
    zoneDescription?: string | null // String
    zoneName?: string | null // String
  }
  Specialization: {
    // root type
    class?: NexusGenRootTypes['Class'] | null // Class
    description?: string | null // String
    id?: number | null // Int
    name?: string | null // String
  }
  Trait: {
    // root type
    description?: string | null // String
    id?: number | null // Int
    name?: string | null // String
    race?: NexusGenRootTypes['Race'] | null // Race
  }
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Class: {
    // field return type
    armorType: string[] | null // [String!]
    combatRoles: string[] | null // [String!]
    crestSrc: string | null // String
    feature: NexusGenRootTypes['Feature'][] | null // [Feature!]
    id: number | null // Int
    info: string | null // String
    introDescription: string | null // String
    introTitle: string | null // String
    name: string | null // String
    race: NexusGenRootTypes['Race'][] | null // [Race!]
    resources: string[] | null // [String!]
    specialization: NexusGenRootTypes['Specialization'][] | null // [Specialization!]
    weapons: string[] | null // [String!]
  }
  Feature: {
    // field return type
    class: NexusGenRootTypes['Class'] | null // Class
    description: string | null // String
    id: number | null // Int
    name: string | null // String
  }
  Query: {
    // field return type
    class: NexusGenRootTypes['Class'][] | null // [Class!]
    feature: NexusGenRootTypes['Feature'][] | null // [Feature!]
    race: NexusGenRootTypes['Race'][] | null // [Race!]
    specialization: NexusGenRootTypes['Specialization'][] | null // [Specialization!]
    trait: NexusGenRootTypes['Trait'][] | null // [Trait!]
  }
  Race: {
    // field return type
    cityDescription: string | null // String
    cityName: string | null // String
    crestSrc: string | null // String
    faction: string | null // String
    historyDescription: string | null // String
    historyTitle: string | null // String
    id: number | null // Int
    introDescription: string | null // String
    introTitle: string | null // String
    mountDescription: string | null // String
    mountName: string | null // String
    name: string | null // String
    traits: Array<NexusGenRootTypes['Trait'] | null> | null // [Trait]
    type: string | null // String
    zoneDescription: string | null // String
    zoneName: string | null // String
  }
  Specialization: {
    // field return type
    class: NexusGenRootTypes['Class'] | null // Class
    description: string | null // String
    id: number | null // Int
    name: string | null // String
  }
  Trait: {
    // field return type
    description: string | null // String
    id: number | null // Int
    name: string | null // String
    race: NexusGenRootTypes['Race'] | null // Race
  }
}

export interface NexusGenFieldTypeNames {
  Class: {
    // field return type name
    armorType: 'String'
    combatRoles: 'String'
    crestSrc: 'String'
    feature: 'Feature'
    id: 'Int'
    info: 'String'
    introDescription: 'String'
    introTitle: 'String'
    name: 'String'
    race: 'Race'
    resources: 'String'
    specialization: 'Specialization'
    weapons: 'String'
  }
  Feature: {
    // field return type name
    class: 'Class'
    description: 'String'
    id: 'Int'
    name: 'String'
  }
  Query: {
    // field return type name
    class: 'Class'
    feature: 'Feature'
    race: 'Race'
    specialization: 'Specialization'
    trait: 'Trait'
  }
  Race: {
    // field return type name
    cityDescription: 'String'
    cityName: 'String'
    crestSrc: 'String'
    faction: 'String'
    historyDescription: 'String'
    historyTitle: 'String'
    id: 'Int'
    introDescription: 'String'
    introTitle: 'String'
    mountDescription: 'String'
    mountName: 'String'
    name: 'String'
    traits: 'Trait'
    type: 'String'
    zoneDescription: 'String'
    zoneName: 'String'
  }
  Specialization: {
    // field return type name
    class: 'Class'
    description: 'String'
    id: 'Int'
    name: 'String'
  }
  Trait: {
    // field return type name
    description: 'String'
    id: 'Int'
    name: 'String'
    race: 'Race'
  }
}

export interface NexusGenArgTypes {}

export interface NexusGenAbstractTypeMembers {}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects

export type NexusGenInputNames = never

export type NexusGenEnumNames = never

export type NexusGenInterfaceNames = never

export type NexusGenScalarNames = keyof NexusGenScalars

export type NexusGenUnionNames = never

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never

export type NexusGenAbstractsUsingStrategyResolveType = never

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  fieldTypeNames: NexusGenFieldTypeNames
  allTypes: NexusGenAllTypes
  typeInterfaces: NexusGenTypeInterfaces
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes:
    | NexusGenTypes['inputNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes:
    | NexusGenTypes['allInputTypes']
    | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractTypeMembers: NexusGenAbstractTypeMembers
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType
  features: NexusGenFeaturesConfig
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginInputFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}
