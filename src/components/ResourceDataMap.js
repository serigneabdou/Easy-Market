import React from 'react'

const ResourceDataMap = ({
    resourceItem: ResourceItem,
    resourceName,
    resourceData = []
}) => {
    resourceData = Array.isArray(resourceData) ? resourceData : [resourceData]
    return (
        <>
            {
                [...resourceData].map((resource, i) => (
                    <ResourceItem key={i} {...{ [resourceName]: resource }} />
                ))
            }
        </>
    )
}

export default ResourceDataMap