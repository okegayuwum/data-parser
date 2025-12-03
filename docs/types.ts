// types.ts

import { v4 as uuidv4 } from 'uuid';

export type File = {
  id: string;
  name: string;
  path: string;
  size: number;
  type: string;
};

export type Field = {
  id: string;
  name: string;
  type: string;
  isRequired: boolean;
};

export type Row = {
  id: string;
  file: File;
  fields: Field[];
  values: string[];
};

export type Schema = {
  id: string;
  name: string;
  fields: Field[];
};

export type ParsedFile = {
  id: string;
  name: string;
  schema: Schema;
  rows: Row[];
};

export type ParsedData = {
  id: string;
  name: string;
  files: ParsedFile[];
};

export type Config = {
  filePattern: string;
  outputFolder: string;
  schema: Schema;
};

export type Result = {
  parsedData: ParsedData;
  errors: Error[];
};

export type Error = {
  message: string;
  row: Row;
  field: Field;
};

export type RowValues = {
  [key: string]: string;
};

export type FieldValue = {
  value: string;
  type: string;
};

export type ParsedFileWithValues = {
  id: string;
  name: string;
  schema: Schema;
  rows: RowWithValues[];
};

export type RowWithValues = {
  id: string;
  file: File;
  fields: Field[];
  values: FieldValue[];
};

export type ParsedDataWithValues = {
  id: string;
  name: string;
  files: ParsedFileWithValues[];
};

export type ConfigWithValues = {
  filePattern: string;
  outputFolder: string;
  schema: Schema;
  values: RowValues;
};

export type ResultWithValues = {
  parsedData: ParsedDataWithValues;
  errors: Error[];
};