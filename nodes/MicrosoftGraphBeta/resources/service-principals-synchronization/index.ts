import type { INodeProperties } from 'n8n-workflow';

export const servicePrincipalsSynchronizationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					]
				}
			},
			"options": [
				{
					"name": "Service Principals Delete Synchronization",
					"value": "Service Principals Delete Synchronization",
					"action": "Delete navigation property synchronization for servicePrincipals",
					"description": "Delete navigation property synchronization for servicePrincipals",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization"
						}
					}
				},
				{
					"name": "Service Principals Get Synchronization",
					"value": "Service Principals Get Synchronization",
					"action": "Get synchronization from servicePrincipals",
					"description": "Get synchronization from servicePrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization"
						}
					}
				},
				{
					"name": "Service Principals Update Synchronization",
					"value": "Service Principals Update Synchronization",
					"action": "Update the navigation property synchronization in servicePrincipals",
					"description": "Update the navigation property synchronization in servicePrincipals",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization"
						}
					}
				},
				{
					"name": "Service Principals Synchronization List Jobs",
					"value": "Service Principals Synchronization List Jobs",
					"action": "List synchronization jobs",
					"description": "List existing jobs for a given application instance (service principal).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Create Jobs",
					"value": "Service Principals Synchronization Create Jobs",
					"action": "Create synchronizationJob",
					"description": "Create new synchronization job with a default synchronization schema. The job is created in a disabled state. Call Start job to start synchronization.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Delete Jobs",
					"value": "Service Principals Synchronization Delete Jobs",
					"action": "Delete navigation property jobs for servicePrincipals",
					"description": "Delete navigation property jobs for servicePrincipals",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Get Jobs",
					"value": "Service Principals Synchronization Get Jobs",
					"action": "Get jobs from servicePrincipals",
					"description": "Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Update Jobs",
					"value": "Service Principals Synchronization Update Jobs",
					"action": "Update the navigation property jobs in servicePrincipals",
					"description": "Update the navigation property jobs in servicePrincipals",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Jobs Delete Schema",
					"value": "Service Principals Synchronization Jobs Delete Schema",
					"action": "Delete navigation property schema for servicePrincipals",
					"description": "Delete navigation property schema for servicePrincipals",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Jobs Get Schema",
					"value": "Service Principals Synchronization Jobs Get Schema",
					"action": "Get synchronizationSchema",
					"description": "Retrieve the schema for a given synchronization job or template.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Jobs Update Schema",
					"value": "Service Principals Synchronization Jobs Update Schema",
					"action": "Update synchronizationSchema",
					"description": "Update the synchronization schema for a given job or template. This method fully replaces the current schema with the one provided in the request. To update the schema of a template, make the call on the application object. You must be the owner of the application.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Jobs Schema List Directories",
					"value": "Service Principals Synchronization Jobs Schema List Directories",
					"action": "Get directories from servicePrincipals",
					"description": "Contains the collection of directories and all of their objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/directories"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Jobs Schema Create Directories",
					"value": "Service Principals Synchronization Jobs Schema Create Directories",
					"action": "Create new navigation property to directories for servicePrincipals",
					"description": "Create new navigation property to directories for servicePrincipals",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/directories"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Jobs Schema Delete Directories",
					"value": "Service Principals Synchronization Jobs Schema Delete Directories",
					"action": "Delete navigation property directories for servicePrincipals",
					"description": "Delete navigation property directories for servicePrincipals",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Jobs Schema Get Directories",
					"value": "Service Principals Synchronization Jobs Schema Get Directories",
					"action": "Get directories from servicePrincipals",
					"description": "Contains the collection of directories and all of their objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Jobs Schema Update Directories",
					"value": "Service Principals Synchronization Jobs Schema Update Directories",
					"action": "Update the navigation property directories in servicePrincipals",
					"description": "Update the navigation property directories in servicePrincipals",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Synchronization List Templates",
					"value": "Service Principals Synchronization List Templates",
					"action": "List existing synchronization templates",
					"description": "List the synchronization templates associated with a given application or service principal.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Create Templates",
					"value": "Service Principals Synchronization Create Templates",
					"action": "Create new navigation property to templates for servicePrincipals",
					"description": "Create new navigation property to templates for servicePrincipals",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Delete Templates",
					"value": "Service Principals Synchronization Delete Templates",
					"action": "Delete navigation property templates for servicePrincipals",
					"description": "Delete navigation property templates for servicePrincipals",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Get Templates",
					"value": "Service Principals Synchronization Get Templates",
					"action": "Get templates from servicePrincipals",
					"description": "Pre-configured synchronization settings for a particular application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Update Templates",
					"value": "Service Principals Synchronization Update Templates",
					"action": "Update the navigation property templates in servicePrincipals",
					"description": "Update the navigation property templates in servicePrincipals",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Templates Delete Schema",
					"value": "Service Principals Synchronization Templates Delete Schema",
					"action": "Delete navigation property schema for servicePrincipals",
					"description": "Delete navigation property schema for servicePrincipals",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Templates Get Schema",
					"value": "Service Principals Synchronization Templates Get Schema",
					"action": "Get schema from servicePrincipals",
					"description": "Default synchronization schema for the jobs based on this template.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Templates Update Schema",
					"value": "Service Principals Synchronization Templates Update Schema",
					"action": "Update the navigation property schema in servicePrincipals",
					"description": "Update the navigation property schema in servicePrincipals",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Templates Schema List Directories",
					"value": "Service Principals Synchronization Templates Schema List Directories",
					"action": "Get directories from servicePrincipals",
					"description": "Contains the collection of directories and all of their objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/directories"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Templates Schema Create Directories",
					"value": "Service Principals Synchronization Templates Schema Create Directories",
					"action": "Create new navigation property to directories for servicePrincipals",
					"description": "Create new navigation property to directories for servicePrincipals",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/directories"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Templates Schema Delete Directories",
					"value": "Service Principals Synchronization Templates Schema Delete Directories",
					"action": "Delete navigation property directories for servicePrincipals",
					"description": "Delete navigation property directories for servicePrincipals",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Templates Schema Get Directories",
					"value": "Service Principals Synchronization Templates Schema Get Directories",
					"action": "Get directories from servicePrincipals",
					"description": "Contains the collection of directories and all of their objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Synchronization Templates Schema Update Directories",
					"value": "Service Principals Synchronization Templates Schema Update Directories",
					"action": "Update the navigation property directories in servicePrincipals",
					"description": "Update the navigation property directories in servicePrincipals",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}/synchronization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Delete Synchronization"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Delete Synchronization"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/synchronization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Get Synchronization"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Get Synchronization"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Get Synchronization"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Update Synchronization"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Update Synchronization"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Jobs"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Jobs"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Jobs"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Jobs"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Jobs"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Create Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Create Jobs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Delete Jobs"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Delete Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Get Jobs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Get Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Get Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Update Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Update Jobs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Delete Schema"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Delete Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Get Schema"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Get Schema"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Get Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Update Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Update Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema Create Directories"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema Create Directories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema Delete Directories"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema Delete Directories"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema Get Directories"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema Get Directories"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema Get Directories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema Update Directories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Jobs Schema Update Directories"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Templates"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Templates"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Templates"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Templates"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Templates"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Templates"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Templates"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Templates"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization List Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Create Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Create Templates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Delete Templates"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Delete Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Get Templates"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Get Templates"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Get Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Update Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Update Templates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Delete Schema"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Delete Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Get Schema"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Get Schema"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Get Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Update Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Update Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema Create Directories"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema Create Directories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema Delete Directories"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema Delete Directories"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema Get Directories"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema Get Directories"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema Get Directories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema Update Directories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Synchronization"
					],
					"operation": [
						"Service Principals Synchronization Templates Schema Update Directories"
					]
				}
			}
		},
];
