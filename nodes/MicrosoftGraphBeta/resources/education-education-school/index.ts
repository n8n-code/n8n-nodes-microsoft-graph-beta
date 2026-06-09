import type { INodeProperties } from 'n8n-workflow';

export const educationEducationSchoolDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					]
				}
			},
			"options": [
				{
					"name": "Education List Schools",
					"value": "Education List Schools",
					"action": "List educationSchools",
					"description": "Retrieve a list of all school objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/schools"
						}
					}
				},
				{
					"name": "Education Create Schools",
					"value": "Education Create Schools",
					"action": "Create educationSchool",
					"description": "Create a school.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/schools"
						}
					}
				},
				{
					"name": "Education Delete Schools",
					"value": "Education Delete Schools",
					"action": "Delete navigation property schools for education",
					"description": "Delete navigation property schools for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}"
						}
					}
				},
				{
					"name": "Education Get Schools",
					"value": "Education Get Schools",
					"action": "Get schools from education",
					"description": "Get schools from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}"
						}
					}
				},
				{
					"name": "Education Update Schools",
					"value": "Education Update Schools",
					"action": "Update the navigation property schools in education",
					"description": "Update the navigation property schools in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}"
						}
					}
				},
				{
					"name": "Education Schools Get Administrative Unit",
					"value": "Education Schools Get Administrative Unit",
					"action": "Get administrativeUnit",
					"description": "Retrieve the simple directory **administrativeUnit** that corresponds to this **educationSchool**.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}/administrativeUnit"
						}
					}
				},
				{
					"name": "Education Schools Update Administrative Unit",
					"value": "Education Schools Update Administrative Unit",
					"action": "Update the navigation property administrativeUnit in education",
					"description": "Update the navigation property administrativeUnit in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}/administrativeUnit"
						}
					}
				},
				{
					"name": "Education Schools List Classes",
					"value": "Education Schools List Classes",
					"action": "List educationClasses",
					"description": "Retrieve a list of classes owned by a school.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}/classes"
						}
					}
				},
				{
					"name": "Education Schools List Ref Classes",
					"value": "Education Schools List Ref Classes",
					"action": "List educationClasses",
					"description": "Retrieve a list of classes owned by a school.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}/classes/$ref"
						}
					}
				},
				{
					"name": "Education Schools Create Ref Classes",
					"value": "Education Schools Create Ref Classes",
					"action": "Create new navigation property ref to classes for education",
					"description": "Create new navigation property ref to classes for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}/classes/$ref"
						}
					}
				},
				{
					"name": "Education Schools Delete Ref Classes",
					"value": "Education Schools Delete Ref Classes",
					"action": "Delete ref of navigation property classes for education",
					"description": "Delete ref of navigation property classes for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}/classes/{{$parameter[\"educationClass-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Education Schools List Users",
					"value": "Education Schools List Users",
					"action": "List educationUsers",
					"description": "Retrieve a list of users at a school.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}/users"
						}
					}
				},
				{
					"name": "Education Schools List Ref Users",
					"value": "Education Schools List Ref Users",
					"action": "List educationUsers",
					"description": "Retrieve a list of users at a school.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}/users/$ref"
						}
					}
				},
				{
					"name": "Education Schools Create Ref Users",
					"value": "Education Schools Create Ref Users",
					"action": "Create new navigation property ref to users for education",
					"description": "Create new navigation property ref to users for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}/users/$ref"
						}
					}
				},
				{
					"name": "Education Schools Delete Ref Users",
					"value": "Education Schools Delete Ref Users",
					"action": "Delete ref of navigation property users for education",
					"description": "Delete ref of navigation property users for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/schools/{{$parameter[\"educationSchool-id\"]}}/users/{{$parameter[\"educationUser-id\"]}}/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /education/schools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education List Schools"
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
						"Education Education School"
					],
					"operation": [
						"Education List Schools"
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
						"Education Education School"
					],
					"operation": [
						"Education List Schools"
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
						"Education Education School"
					],
					"operation": [
						"Education List Schools"
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
						"Education Education School"
					],
					"operation": [
						"Education List Schools"
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
						"Education Education School"
					],
					"operation": [
						"Education List Schools"
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
						"Education Education School"
					],
					"operation": [
						"Education List Schools"
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
						"Education Education School"
					],
					"operation": [
						"Education List Schools"
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
						"Education Education School"
					],
					"operation": [
						"Education List Schools"
					]
				}
			}
		},
		{
			"displayName": "POST /education/schools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Create Schools"
					]
				}
			}
		},
		{
			"displayName": "POST /education/schools<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Create Schools"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/schools/{educationSchool-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Delete Schools"
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
						"Education Education School"
					],
					"operation": [
						"Education Delete Schools"
					]
				}
			}
		},
		{
			"displayName": "GET /education/schools/{educationSchool-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Get Schools"
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
						"Education Education School"
					],
					"operation": [
						"Education Get Schools"
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
						"Education Education School"
					],
					"operation": [
						"Education Get Schools"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/schools/{educationSchool-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Update Schools"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/schools/{educationSchool-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Update Schools"
					]
				}
			}
		},
		{
			"displayName": "GET /education/schools/{educationSchool-id}/administrativeUnit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools Get Administrative Unit"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools Get Administrative Unit"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools Get Administrative Unit"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/schools/{educationSchool-id}/administrativeUnit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools Update Administrative Unit"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/schools/{educationSchool-id}/administrativeUnit<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools Update Administrative Unit"
					]
				}
			}
		},
		{
			"displayName": "GET /education/schools/{educationSchool-id}/classes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools List Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/schools/{educationSchool-id}/classes/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Classes"
					]
				}
			}
		},
		{
			"displayName": "POST /education/schools/{educationSchool-id}/classes/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools Create Ref Classes"
					]
				}
			}
		},
		{
			"displayName": "Odata Id",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools Create Ref Classes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/schools/{educationSchool-id}/classes/{educationClass-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools Delete Ref Classes"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools Delete Ref Classes"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools Delete Ref Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/schools/{educationSchool-id}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools List Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Users"
					]
				}
			}
		},
		{
			"displayName": "GET /education/schools/{educationSchool-id}/users/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools List Ref Users"
					]
				}
			}
		},
		{
			"displayName": "POST /education/schools/{educationSchool-id}/users/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools Create Ref Users"
					]
				}
			}
		},
		{
			"displayName": "Odata Id",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools Create Ref Users"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/schools/{educationSchool-id}/users/{educationUser-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools Delete Ref Users"
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
						"Education Education School"
					],
					"operation": [
						"Education Schools Delete Ref Users"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education School"
					],
					"operation": [
						"Education Schools Delete Ref Users"
					]
				}
			}
		},
];
