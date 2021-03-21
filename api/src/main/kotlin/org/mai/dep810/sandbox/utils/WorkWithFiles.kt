package org.mai.dep810.sandbox.utils

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.databind.MapperFeature
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.registerKotlinModule

class WorkWithFiles {
    companion object{
        fun readJson(path: String) : String = javaClass.classLoader.getResource("$path.json").readText()
        inline fun<T> serialize(obj: T): String {
            return ObjectMapper()
                    .configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true)
                    .setSerializationInclusion(JsonInclude.Include.NON_NULL)
                    .registerKotlinModule()
                    .writeValueAsString(obj)
        }
        inline fun <reified T> deserialize(path: String): T {
            val rawData = readJson(path)
            return ObjectMapper()
                    .setDateFormat(Constants.dateTimeFormat)
                    .registerKotlinModule()
                    .readValue(rawData)
        }
    }
}