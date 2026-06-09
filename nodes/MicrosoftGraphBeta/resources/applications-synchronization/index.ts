import type { INodeProperties } from 'n8n-workflow';

export const applicationsSynchronizationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					]
				}
			},
			"options": [
				{
					"name": "Applications Delete Synchronization",
					"value": "Applications Delete Synchronization",
					"action": "Delete navigation property synchronization for applications",
					"description": "Delete navigation property synchronization for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization"
						}
					}
				},
				{
					"name": "Applications Get Synchronization",
					"value": "Applications Get Synchronization",
					"action": "Get synchronization from applications",
					"description": "Get synchronization from applications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization"
						}
					}
				},
				{
					"name": "Applications Update Synchronization",
					"value": "Applications Update Synchronization",
					"action": "Update the navigation property synchronization in applications",
					"description": "Update the navigation property synchronization in applications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization"
						}
					}
				},
				{
					"name": "Applications Synchronization List Jobs",
					"value": "Applications Synchronization List Jobs",
					"action": "List synchronization jobs",
					"description": "List existing jobs for a given application instance (service principal).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs"
						}
					}
				},
				{
					"name": "Applications Synchronization Create Jobs",
					"value": "Applications Synchronization Create Jobs",
					"action": "Create synchronizationJob",
					"description": "Create new synchronization job with a default synchronization schema. The job is created in a disabled state. Call Start job to start synchronization.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs"
						}
					}
				},
				{
					"name": "Applications Synchronization Delete Jobs",
					"value": "Applications Synchronization Delete Jobs",
					"action": "Delete navigation property jobs for applications",
					"description": "Delete navigation property jobs for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Synchronization Get Jobs",
					"value": "Applications Synchronization Get Jobs",
					"action": "Get jobs from applications",
					"description": "Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Synchronization Update Jobs",
					"value": "Applications Synchronization Update Jobs",
					"action": "Update the navigation property jobs in applications",
					"description": "Update the navigation property jobs in applications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Synchronization Jobs Delete Schema",
					"value": "Applications Synchronization Jobs Delete Schema",
					"action": "Delete navigation property schema for applications",
					"description": "Delete navigation property schema for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Applications Synchronization Jobs Get Schema",
					"value": "Applications Synchronization Jobs Get Schema",
					"action": "Get synchronizationSchema",
					"description": "Retrieve the schema for a given synchronization job or template.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Applications Synchronization Jobs Update Schema",
					"value": "Applications Synchronization Jobs Update Schema",
					"action": "Update synchronizationSchema",
					"description": "Update the synchronization schema for a given job or template. This method fully replaces the current schema with the one provided in the request. To update the schema of a template, make the call on the application object. You must be the owner of the application.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Applications Synchronization Jobs Schema List Directories",
					"value": "Applications Synchronization Jobs Schema List Directories",
					"action": "Get directories from applications",
					"description": "Contains the collection of directories and all of their objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/directories"
						}
					}
				},
				{
					"name": "Applications Synchronization Jobs Schema Create Directories",
					"value": "Applications Synchronization Jobs Schema Create Directories",
					"action": "Create new navigation property to directories for applications",
					"description": "Create new navigation property to directories for applications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/directories"
						}
					}
				},
				{
					"name": "Applications Synchronization Jobs Schema Delete Directories",
					"value": "Applications Synchronization Jobs Schema Delete Directories",
					"action": "Delete navigation property directories for applications",
					"description": "Delete navigation property directories for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Synchronization Jobs Schema Get Directories",
					"value": "Applications Synchronization Jobs Schema Get Directories",
					"action": "Get directories from applications",
					"description": "Contains the collection of directories and all of their objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Synchronization Jobs Schema Update Directories",
					"value": "Applications Synchronization Jobs Schema Update Directories",
					"action": "Update the navigation property directories in applications",
					"description": "Update the navigation property directories in applications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Synchronization List Templates",
					"value": "Applications Synchronization List Templates",
					"action": "List existing synchronization templates",
					"description": "List the synchronization templates associated with a given application or service principal.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates"
						}
					}
				},
				{
					"name": "Applications Synchronization Create Templates",
					"value": "Applications Synchronization Create Templates",
					"action": "Create new navigation property to templates for applications",
					"description": "Create new navigation property to templates for applications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates"
						}
					}
				},
				{
					"name": "Applications Synchronization Delete Templates",
					"value": "Applications Synchronization Delete Templates",
					"action": "Delete navigation property templates for applications",
					"description": "Delete navigation property templates for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Synchronization Get Templates",
					"value": "Applications Synchronization Get Templates",
					"action": "Get templates from applications",
					"description": "Pre-configured synchronization settings for a particular application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Synchronization Update Templates",
					"value": "Applications Synchronization Update Templates",
					"action": "Update the navigation property templates in applications",
					"description": "Update the navigation property templates in applications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Synchronization Templates Delete Schema",
					"value": "Applications Synchronization Templates Delete Schema",
					"action": "Delete navigation property schema for applications",
					"description": "Delete navigation property schema for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Applications Synchronization Templates Get Schema",
					"value": "Applications Synchronization Templates Get Schema",
					"action": "Get schema from applications",
					"description": "Default synchronization schema for the jobs based on this template.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Applications Synchronization Templates Update Schema",
					"value": "Applications Synchronization Templates Update Schema",
					"action": "Update the navigation property schema in applications",
					"description": "Update the navigation property schema in applications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema"
						}
					}
				},
				{
					"name": "Applications Synchronization Templates Schema List Directories",
					"value": "Applications Synchronization Templates Schema List Directories",
					"action": "Get directories from applications",
					"description": "Contains the collection of directories and all of their objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/directories"
						}
					}
				},
				{
					"name": "Applications Synchronization Templates Schema Create Directories",
					"value": "Applications Synchronization Templates Schema Create Directories",
					"action": "Create new navigation property to directories for applications",
					"description": "Create new navigation property to directories for applications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/directories"
						}
					}
				},
				{
					"name": "Applications Synchronization Templates Schema Delete Directories",
					"value": "Applications Synchronization Templates Schema Delete Directories",
					"action": "Delete navigation property directories for applications",
					"description": "Delete navigation property directories for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Synchronization Templates Schema Get Directories",
					"value": "Applications Synchronization Templates Schema Get Directories",
					"action": "Get directories from applications",
					"description": "Contains the collection of directories and all of their objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Synchronization Templates Schema Update Directories",
					"value": "Applications Synchronization Templates Schema Update Directories",
					"action": "Update the navigation property directories in applications",
					"description": "Update the navigation property directories in applications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /applications/{application-id}/synchronization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Delete Synchronization"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Delete Synchronization"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/synchronization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Get Synchronization"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Get Synchronization"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Get Synchronization"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Update Synchronization"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Update Synchronization"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/synchronization/jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Jobs"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Jobs"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Jobs"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Jobs"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Jobs"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Jobs"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Jobs"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Jobs"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Create Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Create Jobs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Delete Jobs"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Delete Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Get Jobs"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Get Jobs"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Get Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Update Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Update Jobs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Delete Schema"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Delete Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Get Schema"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Get Schema"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Get Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Update Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Update Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema Create Directories"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema Create Directories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema Delete Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema Delete Directories"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema Get Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema Get Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema Get Directories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema Update Directories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Jobs Schema Update Directories"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/synchronization/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Templates"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Templates"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Templates"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Templates"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Templates"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Templates"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Templates"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Templates"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization List Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Create Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/templates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Create Templates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Delete Templates"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Delete Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Get Templates"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Get Templates"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Get Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Update Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Update Templates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Delete Schema"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Delete Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Get Schema"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Get Schema"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Get Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Update Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Update Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema List Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema List Directories"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema Create Directories"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema Create Directories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema Delete Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema Delete Directories"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema Get Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema Get Directories"
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
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema Get Directories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema Update Directories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Synchronization"
					],
					"operation": [
						"Applications Synchronization Templates Schema Update Directories"
					]
				}
			}
		},
];
