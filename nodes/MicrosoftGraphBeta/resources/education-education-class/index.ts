import type { INodeProperties } from 'n8n-workflow';

export const educationEducationClassDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					]
				}
			},
			"options": [
				{
					"name": "Education List Classes",
					"value": "Education List Classes",
					"action": "List classes",
					"description": "Retrieve a list of all class objects. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes"
						}
					}
				},
				{
					"name": "Education Create Classes",
					"value": "Education Create Classes",
					"action": "Create educationClass",
					"description": "Create a new class. This will also create a universal group. When you use this API to create a class, it will add special properties to the group, which will\nadd features such as assignments and special handling within Microsoft Teams when teams are created using the group. Please note that this API only creates the universal group and does not create a team. Microsoft Teams provides a user interface for teachers to create teams for their own classes using the groups created by this API.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes"
						}
					}
				},
				{
					"name": "Education Delete Classes",
					"value": "Education Delete Classes",
					"action": "Delete navigation property classes for education",
					"description": "Delete navigation property classes for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}"
						}
					}
				},
				{
					"name": "Education Get Classes",
					"value": "Education Get Classes",
					"action": "Get classes from education",
					"description": "Get classes from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}"
						}
					}
				},
				{
					"name": "Education Update Classes",
					"value": "Education Update Classes",
					"action": "Update the navigation property classes in education",
					"description": "Update the navigation property classes in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes List Assignment Categories",
					"value": "Education Classes List Assignment Categories",
					"action": "List assignmentCategories",
					"description": "Retrieve a list of educationCategory objects. Only teachers can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignmentCategories"
						}
					}
				},
				{
					"name": "Education Classes Create Assignment Categories",
					"value": "Education Classes Create Assignment Categories",
					"action": "Create educationCategory",
					"description": "Creates a new educationCategory on an educationClass. Only teachers can perform this operation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignmentCategories"
						}
					}
				},
				{
					"name": "Education Classes Delete Assignment Categories",
					"value": "Education Classes Delete Assignment Categories",
					"action": "Delete navigation property assignmentCategories for education",
					"description": "Delete navigation property assignmentCategories for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignmentCategories/{{$parameter[\"educationCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Get Assignment Categories",
					"value": "Education Classes Get Assignment Categories",
					"action": "Get assignmentCategories from education",
					"description": "All categories associated with this class. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignmentCategories/{{$parameter[\"educationCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Update Assignment Categories",
					"value": "Education Classes Update Assignment Categories",
					"action": "Update the navigation property assignmentCategories in education",
					"description": "Update the navigation property assignmentCategories in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignmentCategories/{{$parameter[\"educationCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Delete Assignment Defaults",
					"value": "Education Classes Delete Assignment Defaults",
					"action": "Delete navigation property assignmentDefaults for education",
					"description": "Delete navigation property assignmentDefaults for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignmentDefaults"
						}
					}
				},
				{
					"name": "Education Classes Get Assignment Defaults",
					"value": "Education Classes Get Assignment Defaults",
					"action": "Get educationAssignmentDefaults",
					"description": "Read the properties and relationships of an educationAssignmentDefaults object.  These are the class-level assignment defaults respected by new assignments created in the class. Callers can continue to specify custom values on each **assignment** creation if they don't want the default behaviors. Only teachers can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignmentDefaults"
						}
					}
				},
				{
					"name": "Education Classes Update Assignment Defaults",
					"value": "Education Classes Update Assignment Defaults",
					"action": "Update educationAssignmentDefaults",
					"description": "Update the properties of an educationAssignmentDefaults object. Only teachers can update these settings.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignmentDefaults"
						}
					}
				},
				{
					"name": "Education Classes Delete Assignment Settings",
					"value": "Education Classes Delete Assignment Settings",
					"action": "Delete navigation property assignmentSettings for education",
					"description": "Delete navigation property assignmentSettings for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignmentSettings"
						}
					}
				},
				{
					"name": "Education Classes Get Assignment Settings",
					"value": "Education Classes Get Assignment Settings",
					"action": "Get educationAssignmentSettings",
					"description": "Read the properties and relationships of an educationAssignmentSettings object. Only teachers can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignmentSettings"
						}
					}
				},
				{
					"name": "Education Classes Update Assignment Settings",
					"value": "Education Classes Update Assignment Settings",
					"action": "Update educationAssignmentSettings",
					"description": "Update the properties of an educationAssignmentSettings object. Only Teachers can update these settings.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignmentSettings"
						}
					}
				},
				{
					"name": "Education Classes List Assignments",
					"value": "Education Classes List Assignments",
					"action": "List class assignments",
					"description": "Retrieve a list of assignment objects. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application executing with application permissions can see all assignment objects for the class. Students can only see assignments that are assigned to them.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Education Classes Create Assignments",
					"value": "Education Classes Create Assignments",
					"action": "Create educationAssignment",
					"description": "Create a new assignment. Only teachers in a class can create an assignment. Assignments start in the Draft state, which means that students will not see the assignment until publication.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Education Classes Delete Assignments",
					"value": "Education Classes Delete Assignments",
					"action": "Delete navigation property assignments for education",
					"description": "Delete navigation property assignments for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Get Assignments",
					"value": "Education Classes Get Assignments",
					"action": "Get assignments from education",
					"description": "All assignments associated with this class. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Update Assignments",
					"value": "Education Classes Update Assignments",
					"action": "Update the navigation property assignments in education",
					"description": "Update the navigation property assignments in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments List Categories",
					"value": "Education Classes Assignments List Categories",
					"action": "List categories",
					"description": "List all the categories associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Education Classes Assignments Create Categories",
					"value": "Education Classes Assignments Create Categories",
					"action": "Create new navigation property to categories for education",
					"description": "Create new navigation property to categories for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Education Classes Assignments List Ref Categories",
					"value": "Education Classes Assignments List Ref Categories",
					"action": "List categories",
					"description": "List all the categories associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories/$ref"
						}
					}
				},
				{
					"name": "Education Classes Assignments Create Ref Categories",
					"value": "Education Classes Assignments Create Ref Categories",
					"action": "Create new navigation property ref to categories for education",
					"description": "Create new navigation property ref to categories for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories/$ref"
						}
					}
				},
				{
					"name": "Education Classes Assignments Delete Ref Categories",
					"value": "Education Classes Assignments Delete Ref Categories",
					"action": "Delete ref of navigation property categories for education",
					"description": "Delete ref of navigation property categories for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories/{{$parameter[\"educationCategory-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Education Classes Assignments List Resources",
					"value": "Education Classes Assignments List Resources",
					"action": "List assignment resources",
					"description": "Get all the educationAssignmentResource objects associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Classes Assignments Create Resources",
					"value": "Education Classes Assignments Create Resources",
					"action": "Create educationAssignmentResource",
					"description": "Create an assignment resource. Only teachers can perform this operation. You can create the following types of assignment resources: Every resource has an **@odata.type** property to indicate which type of resource is being created. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Classes Assignments Delete Resources",
					"value": "Education Classes Assignments Delete Resources",
					"action": "Delete navigation property resources for education",
					"description": "Delete navigation property resources for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources/{{$parameter[\"educationAssignmentResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Get Resources",
					"value": "Education Classes Assignments Get Resources",
					"action": "Get resources from education",
					"description": "Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources/{{$parameter[\"educationAssignmentResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Update Resources",
					"value": "Education Classes Assignments Update Resources",
					"action": "Update the navigation property resources in education",
					"description": "Update the navigation property resources in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources/{{$parameter[\"educationAssignmentResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Delete Rubric",
					"value": "Education Classes Assignments Delete Rubric",
					"action": "Delete navigation property rubric for education",
					"description": "Delete navigation property rubric for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric"
						}
					}
				},
				{
					"name": "Education Classes Assignments Get Rubric",
					"value": "Education Classes Assignments Get Rubric",
					"action": "Get educationRubric attached to educationAssignment",
					"description": "Get the educationRubric object attached to an educationAssignment, if one exists. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric"
						}
					}
				},
				{
					"name": "Education Classes Assignments Update Rubric",
					"value": "Education Classes Assignments Update Rubric",
					"action": "Update the navigation property rubric in education",
					"description": "Update the navigation property rubric in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric"
						}
					}
				},
				{
					"name": "Education Classes Assignments Delete Ref Rubric",
					"value": "Education Classes Assignments Delete Ref Rubric",
					"action": "Delete ref of navigation property rubric for education",
					"description": "Delete ref of navigation property rubric for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric/$ref"
						}
					}
				},
				{
					"name": "Education Classes Assignments Get Ref Rubric",
					"value": "Education Classes Assignments Get Ref Rubric",
					"action": "Get educationRubric attached to educationAssignment",
					"description": "Get the educationRubric object attached to an educationAssignment, if one exists. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric/$ref"
						}
					}
				},
				{
					"name": "Education Classes Assignments Update Ref Rubric",
					"value": "Education Classes Assignments Update Ref Rubric",
					"action": "Update the ref of navigation property rubric in education",
					"description": "Update the ref of navigation property rubric in education",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric/$ref"
						}
					}
				},
				{
					"name": "Education Classes Assignments List Submissions",
					"value": "Education Classes Assignments List Submissions",
					"action": "List submissions",
					"description": "List all the submissions associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application with application permissions can get all the **submissions**, a student can only get **submissions** that they are associated with. Provide the header `Prefer: include-unknown-enum-members` to properly list **submissions** with the `reassigned` status. For details, see the examples section.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions"
						}
					}
				},
				{
					"name": "Education Classes Assignments Create Submissions",
					"value": "Education Classes Assignments Create Submissions",
					"action": "Create new navigation property to submissions for education",
					"description": "Create new navigation property to submissions for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions"
						}
					}
				},
				{
					"name": "Education Classes Assignments Delete Submissions",
					"value": "Education Classes Assignments Delete Submissions",
					"action": "Delete navigation property submissions for education",
					"description": "Delete navigation property submissions for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Get Submissions",
					"value": "Education Classes Assignments Get Submissions",
					"action": "Get submissions from education",
					"description": "Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Update Submissions",
					"value": "Education Classes Assignments Update Submissions",
					"action": "Update the navigation property submissions in education",
					"description": "Update the navigation property submissions in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions List Outcomes",
					"value": "Education Classes Assignments Submissions List Outcomes",
					"action": "List outcomes",
					"description": "Retrieve a list of educationOutcome objects.  There are four types of outcomes: **educationPointsOutcome**, **educationFeedbackOutcome**, **educationRubricOutcome**, and **educationFeedbackResourceOutcome**. Only teachers, students, and applications with application permissions can perform this operation. A submission for a credit assignment (one that has no point value and no rubric) will have an educationFeedbackOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for a points assignment (one that has a point value assigned) will have both an educationFeedbackOutcome and an educationPointsOutcome. A submission for an assignment with an attached rubric, if the rubric is a credit rubric (no points), will have an educationFeedbackOutcome and an educationRubricOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for an assignment with an attached rubric, if the rubric is a points rubric, will have an educationFeedbackOutcome, an educationPointsOutcome, and an educationRubricOutcome. A submission for a feedback resource will have an educationFeedbackResourceOutcome. All outcome types have a regular and a published property appropriate to that type of outcome; for example, **points** and **publishedPoints**, **feedback** and **publishedFeedback**. The regular property is the most recent value updated by the teacher; the published property is the most recent value returned to the student.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Create Outcomes",
					"value": "Education Classes Assignments Submissions Create Outcomes",
					"action": "Create educationFeedbackResourceOutcome",
					"description": "Create a new feedback resource for a submission. Only a teacher can perform this operation. To create a new file-based resource, upload the file to the feedback resources folder associated with the assignment. If the file doesn't exist or is not in that folder, the `POST` request will fail.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Delete Outcomes",
					"value": "Education Classes Assignments Submissions Delete Outcomes",
					"action": "Delete navigation property outcomes for education",
					"description": "Delete navigation property outcomes for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes/{{$parameter[\"educationOutcome-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Get Outcomes",
					"value": "Education Classes Assignments Submissions Get Outcomes",
					"action": "Get outcomes from education",
					"description": "Get outcomes from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes/{{$parameter[\"educationOutcome-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Update Outcomes",
					"value": "Education Classes Assignments Submissions Update Outcomes",
					"action": "Update the navigation property outcomes in education",
					"description": "Update the navigation property outcomes in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes/{{$parameter[\"educationOutcome-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions List Resources",
					"value": "Education Classes Assignments Submissions List Resources",
					"action": "List submission resources",
					"description": "List the resources associated with a submission. Only teachers, students, and applications with application permissions can perform this operation. The educationSubmissionResource object is a wrapper around the actual resource object the student is working on. The wrapper also includes a pointer to the resources on the assignment if this was copied from the assignment during the assign process. These resources are the working copy of the assignment. The **submittedResources** are the resources that have officially been submitted to be graded.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Create Resources",
					"value": "Education Classes Assignments Submissions Create Resources",
					"action": "Create educationSubmissionResource",
					"description": "Add a educationSubmissionResource to a submission resource list. Only teachers and students can perform this operation. The operation will not succeed if the **allowStudentsToAddResources** flag is not set to `true`. To create a new file-based resource, upload the file to the resources folder associated with the submission. If the file doesn't exist or is not in that folder, the POST request will fail.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Delete Resources",
					"value": "Education Classes Assignments Submissions Delete Resources",
					"action": "Delete navigation property resources for education",
					"description": "Delete navigation property resources for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Get Resources",
					"value": "Education Classes Assignments Submissions Get Resources",
					"action": "Get resources from education",
					"description": "Get resources from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Update Resources",
					"value": "Education Classes Assignments Submissions Update Resources",
					"action": "Update the navigation property resources in education",
					"description": "Update the navigation property resources in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions List Submitted Resources",
					"value": "Education Classes Assignments Submissions List Submitted Resources",
					"action": "Get submittedResources from education",
					"description": "Get submittedResources from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Create Submitted Resources",
					"value": "Education Classes Assignments Submissions Create Submitted Resources",
					"action": "Create new navigation property to submittedResources for education",
					"description": "Create new navigation property to submittedResources for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Delete Submitted Resources",
					"value": "Education Classes Assignments Submissions Delete Submitted Resources",
					"action": "Delete navigation property submittedResources for education",
					"description": "Delete navigation property submittedResources for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Get Submitted Resources",
					"value": "Education Classes Assignments Submissions Get Submitted Resources",
					"action": "Get submittedResources from education",
					"description": "Get submittedResources from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Assignments Submissions Update Submitted Resources",
					"value": "Education Classes Assignments Submissions Update Submitted Resources",
					"action": "Update the navigation property submittedResources in education",
					"description": "Update the navigation property submittedResources in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes Get Group",
					"value": "Education Classes Get Group",
					"action": "Get group",
					"description": "Retrieve the Microsoft 365 **group** that corresponds to this **educationClass**.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/group"
						}
					}
				},
				{
					"name": "Education Classes List Members",
					"value": "Education Classes List Members",
					"action": "List members",
					"description": "Retrieves the teachers and students for a class. Note that if the delegated token is used, members can only be seen by other members of the class.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/members"
						}
					}
				},
				{
					"name": "Education Classes List Ref Members",
					"value": "Education Classes List Ref Members",
					"action": "List members",
					"description": "Retrieves the teachers and students for a class. Note that if the delegated token is used, members can only be seen by other members of the class.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/members/$ref"
						}
					}
				},
				{
					"name": "Education Classes Create Ref Members",
					"value": "Education Classes Create Ref Members",
					"action": "Create new navigation property ref to members for education",
					"description": "Create new navigation property ref to members for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/members/$ref"
						}
					}
				},
				{
					"name": "Education Classes Delete Ref Members",
					"value": "Education Classes Delete Ref Members",
					"action": "Delete ref of navigation property members for education",
					"description": "Delete ref of navigation property members for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/members/{{$parameter[\"educationUser-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Education Classes List Schools",
					"value": "Education Classes List Schools",
					"action": "List schools",
					"description": "Retrieve a list of schools in which the class is taught.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/schools"
						}
					}
				},
				{
					"name": "Education Classes Get Schools",
					"value": "Education Classes Get Schools",
					"action": "Get schools from education",
					"description": "All schools that this class is associated with. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/schools/{{$parameter[\"educationSchool-id\"]}}"
						}
					}
				},
				{
					"name": "Education Classes List Teachers",
					"value": "Education Classes List Teachers",
					"action": "List teachers",
					"description": "Retrieve a list teachers for a class. Delegated tokens must be members of the class to get the teacher list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/teachers"
						}
					}
				},
				{
					"name": "Education Classes List Ref Teachers",
					"value": "Education Classes List Ref Teachers",
					"action": "List teachers",
					"description": "Retrieve a list teachers for a class. Delegated tokens must be members of the class to get the teacher list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/teachers/$ref"
						}
					}
				},
				{
					"name": "Education Classes Create Ref Teachers",
					"value": "Education Classes Create Ref Teachers",
					"action": "Create new navigation property ref to teachers for education",
					"description": "Create new navigation property ref to teachers for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/teachers/$ref"
						}
					}
				},
				{
					"name": "Education Classes Delete Ref Teachers",
					"value": "Education Classes Delete Ref Teachers",
					"action": "Delete ref of navigation property teachers for education",
					"description": "Delete ref of navigation property teachers for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/teachers/{{$parameter[\"educationUser-id\"]}}/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /education/classes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education List Classes"
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
						"Education Education Class"
					],
					"operation": [
						"Education List Classes"
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
						"Education Education Class"
					],
					"operation": [
						"Education List Classes"
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
						"Education Education Class"
					],
					"operation": [
						"Education List Classes"
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
						"Education Education Class"
					],
					"operation": [
						"Education List Classes"
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
						"Education Education Class"
					],
					"operation": [
						"Education List Classes"
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
						"Education Education Class"
					],
					"operation": [
						"Education List Classes"
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
						"Education Education Class"
					],
					"operation": [
						"Education List Classes"
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
						"Education Education Class"
					],
					"operation": [
						"Education List Classes"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Create Classes"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Create Classes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Delete Classes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Delete Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Get Classes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Get Classes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Get Classes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Update Classes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Update Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignmentCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignment Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignment Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignment Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignment Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignment Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignment Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignment Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignment Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignment Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignmentCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Create Assignment Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignmentCategories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Create Assignment Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Assignment Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Assignment Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignment Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignment Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignment Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Update Assignment Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Update Assignment Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignmentDefaults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Assignment Defaults"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Assignment Defaults"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignmentDefaults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignment Defaults"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignment Defaults"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignment Defaults"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignmentDefaults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Update Assignment Defaults"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignmentDefaults<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Update Assignment Defaults"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignmentSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Assignment Settings"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Assignment Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignmentSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignment Settings"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignment Settings"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignment Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignmentSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Update Assignment Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignmentSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Update Assignment Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignments"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignments"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignments"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignments"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignments"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignments"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignments"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignments"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Assignments"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignments"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignments"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Create Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Create Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Ref Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Ref Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Ref Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Ref Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Ref Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Ref Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Ref Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Create Ref Categories"
					]
				}
			}
		},
		{
			"displayName": "Odata ID",
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Create Ref Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories/{educationCategory-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Delete Ref Categories"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Delete Ref Categories"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Delete Ref Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Create Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Create Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Delete Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Get Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Get Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Get Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Update Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Update Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Delete Rubric"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Delete Rubric"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Get Rubric"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Get Rubric"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Get Rubric"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Update Rubric"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Update Rubric"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Delete Ref Rubric"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Delete Ref Rubric"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Get Ref Rubric"
					]
				}
			}
		},
		{
			"displayName": "PUT /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Update Ref Rubric"
					]
				}
			}
		},
		{
			"displayName": "Odata ID",
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Update Ref Rubric"
					]
				}
			}
		},
		{
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Update Ref Rubric"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Submissions"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Submissions"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Submissions"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Submissions"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Submissions"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Submissions"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Submissions"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Submissions"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments List Submissions"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Create Submissions"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Create Submissions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Delete Submissions"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Delete Submissions"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Get Submissions"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Get Submissions"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Get Submissions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Update Submissions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Update Submissions"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Outcomes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Outcomes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Outcomes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Outcomes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Outcomes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Outcomes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Outcomes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Outcomes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Outcomes"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Create Outcomes"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Create Outcomes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Delete Outcomes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Delete Outcomes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Get Outcomes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Get Outcomes"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Get Outcomes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Update Outcomes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Update Outcomes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Create Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Create Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Delete Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Get Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Get Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Get Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Update Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Update Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Submitted Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Submitted Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Submitted Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Submitted Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Submitted Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Submitted Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Submitted Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Submitted Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions List Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Create Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Create Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Delete Submitted Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Delete Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Get Submitted Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Get Submitted Resources"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Get Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Update Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Assignments Submissions Update Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Group"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Group"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Group"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Members"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/members/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Members"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/members/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Create Ref Members"
					]
				}
			}
		},
		{
			"displayName": "Odata ID",
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Create Ref Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/members/{educationUser-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Ref Members"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Ref Members"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Ref Members"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/schools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Schools"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Schools"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Schools"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Schools"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Schools"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Schools"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Schools"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Schools"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Schools"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/schools/{educationSchool-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Schools"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Schools"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Get Schools"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/teachers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Teachers"
					]
				}
			}
		},
		{
			"displayName": "GET /education/classes/{educationClass-id}/teachers/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes List Ref Teachers"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/teachers/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Create Ref Teachers"
					]
				}
			}
		},
		{
			"displayName": "Odata ID",
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Create Ref Teachers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/classes/{educationClass-id}/teachers/{educationUser-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Ref Teachers"
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Ref Teachers"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Education Education Class"
					],
					"operation": [
						"Education Classes Delete Ref Teachers"
					]
				}
			}
		},
];
