import type { INodeProperties } from 'n8n-workflow';

export const educationEducationSynchronizationProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					]
				}
			},
			"options": [
				{
					"name": "Education List Synchronization Profiles",
					"value": "Education List Synchronization Profiles",
					"action": "List educationSynchronizationProfiles",
					"description": "Retrieve the collection of school data synchronization profiles in the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/synchronizationProfiles"
						}
					}
				},
				{
					"name": "Education Create Synchronization Profiles",
					"value": "Education Create Synchronization Profiles",
					"action": "Create new navigation property to synchronizationProfiles for education",
					"description": "Create new navigation property to synchronizationProfiles for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/synchronizationProfiles"
						}
					}
				},
				{
					"name": "Education Delete Synchronization Profiles",
					"value": "Education Delete Synchronization Profiles",
					"action": "Delete navigation property synchronizationProfiles for education",
					"description": "Delete navigation property synchronizationProfiles for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Education Get Synchronization Profiles",
					"value": "Education Get Synchronization Profiles",
					"action": "Get synchronizationProfiles from education",
					"description": "Get synchronizationProfiles from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Education Update Synchronization Profiles",
					"value": "Education Update Synchronization Profiles",
					"action": "Update the navigation property synchronizationProfiles in education",
					"description": "Update the navigation property synchronizationProfiles in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles List Errors",
					"value": "Education Synchronization Profiles List Errors",
					"action": "Get educationSynchronizationErrors",
					"description": "Get the errors generated during validation and/or during a sync of a specific school data synchronization profile in the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/errors"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles Create Errors",
					"value": "Education Synchronization Profiles Create Errors",
					"action": "Create new navigation property to errors for education",
					"description": "Create new navigation property to errors for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/errors"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles Delete Errors",
					"value": "Education Synchronization Profiles Delete Errors",
					"action": "Delete navigation property errors for education",
					"description": "Delete navigation property errors for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/errors/{{$parameter[\"educationSynchronizationError-id\"]}}"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles Get Errors",
					"value": "Education Synchronization Profiles Get Errors",
					"action": "Get errors from education",
					"description": "All errors associated with this synchronization profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/errors/{{$parameter[\"educationSynchronizationError-id\"]}}"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles Update Errors",
					"value": "Education Synchronization Profiles Update Errors",
					"action": "Update the navigation property errors in education",
					"description": "Update the navigation property errors in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/errors/{{$parameter[\"educationSynchronizationError-id\"]}}"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles Delete Profile Status",
					"value": "Education Synchronization Profiles Delete Profile Status",
					"action": "Delete navigation property profileStatus for education",
					"description": "Delete navigation property profileStatus for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/profileStatus"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles Get Profile Status",
					"value": "Education Synchronization Profiles Get Profile Status",
					"action": "Get the status of an educationSynchronizationProfile",
					"description": "Get the status of a specific school data synchronization profile in the tenant. The response will indicate the status of the sync.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/profileStatus"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles Update Profile Status",
					"value": "Education Synchronization Profiles Update Profile Status",
					"action": "Update the navigation property profileStatus in education",
					"description": "Update the navigation property profileStatus in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/profileStatus"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /education/synchronizationProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education List Synchronization Profiles"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education List Synchronization Profiles"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education List Synchronization Profiles"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education List Synchronization Profiles"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education List Synchronization Profiles"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education List Synchronization Profiles"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education List Synchronization Profiles"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education List Synchronization Profiles"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education List Synchronization Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /education/synchronizationProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Create Synchronization Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /education/synchronizationProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Create Synchronization Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/synchronizationProfiles/{educationSynchronizationProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Delete Synchronization Profiles"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Delete Synchronization Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /education/synchronizationProfiles/{educationSynchronizationProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Get Synchronization Profiles"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Get Synchronization Profiles"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Get Synchronization Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/synchronizationProfiles/{educationSynchronizationProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Update Synchronization Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/synchronizationProfiles/{educationSynchronizationProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Update Synchronization Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /education/synchronizationProfiles/{educationSynchronizationProfile-id}/errors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles List Errors"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles List Errors"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles List Errors"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles List Errors"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles List Errors"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles List Errors"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles List Errors"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles List Errors"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles List Errors"
					]
				}
			}
		},
		{
			"displayName": "POST /education/synchronizationProfiles/{educationSynchronizationProfile-id}/errors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Create Errors"
					]
				}
			}
		},
		{
			"displayName": "POST /education/synchronizationProfiles/{educationSynchronizationProfile-id}/errors<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Create Errors"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/synchronizationProfiles/{educationSynchronizationProfile-id}/errors/{educationSynchronizationError-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Delete Errors"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Delete Errors"
					]
				}
			}
		},
		{
			"displayName": "GET /education/synchronizationProfiles/{educationSynchronizationProfile-id}/errors/{educationSynchronizationError-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Get Errors"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Get Errors"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Get Errors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/synchronizationProfiles/{educationSynchronizationProfile-id}/errors/{educationSynchronizationError-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Update Errors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/synchronizationProfiles/{educationSynchronizationProfile-id}/errors/{educationSynchronizationError-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Update Errors"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/synchronizationProfiles/{educationSynchronizationProfile-id}/profileStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Delete Profile Status"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Delete Profile Status"
					]
				}
			}
		},
		{
			"displayName": "GET /education/synchronizationProfiles/{educationSynchronizationProfile-id}/profileStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Get Profile Status"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Get Profile Status"
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
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Get Profile Status"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/synchronizationProfiles/{educationSynchronizationProfile-id}/profileStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Update Profile Status"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/synchronizationProfiles/{educationSynchronizationProfile-id}/profileStatus<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Synchronization Profile"
					],
					"operation": [
						"Education Synchronization Profiles Update Profile Status"
					]
				}
			}
		},
];
