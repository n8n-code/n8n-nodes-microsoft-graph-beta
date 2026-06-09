import type { INodeProperties } from 'n8n-workflow';

export const educationEducationUserDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					]
				}
			},
			"options": [
				{
					"name": "Education Delete Me",
					"value": "Education Delete Me",
					"action": "Delete navigation property me for education",
					"description": "Delete navigation property me for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/me"
						}
					}
				},
				{
					"name": "Education Get Me",
					"value": "Education Get Me",
					"action": "Get me from education",
					"description": "Get me from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me"
						}
					}
				},
				{
					"name": "Education Update Me",
					"value": "Education Update Me",
					"action": "Update the navigation property me in education",
					"description": "Update the navigation property me in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/me"
						}
					}
				},
				{
					"name": "Education Me List Assignments",
					"value": "Education Me List Assignments",
					"action": "List assignments of a user",
					"description": "Returns a list of assignments assigned to a user for all classes. Only teachers, students, and applications with application permissions can perform this operation. This utility namespace allows a caller to find all the assignments belonging to a student or a teacher in a single call rather than having to request assignments from each class. The assignment list contains what is needed to get the detailed information for the assignment from within the class namespace. All other operations on the assignment should use the class namespace.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments"
						}
					}
				},
				{
					"name": "Education Me Create Assignments",
					"value": "Education Me Create Assignments",
					"action": "Create new navigation property to assignments for education",
					"description": "Create new navigation property to assignments for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments"
						}
					}
				},
				{
					"name": "Education Me Delete Assignments",
					"value": "Education Me Delete Assignments",
					"action": "Delete navigation property assignments for education",
					"description": "Delete navigation property assignments for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Get Assignments",
					"value": "Education Me Get Assignments",
					"action": "Get assignments from education",
					"description": "List of assignments for the user. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Update Assignments",
					"value": "Education Me Update Assignments",
					"action": "Update the navigation property assignments in education",
					"description": "Update the navigation property assignments in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments List Categories",
					"value": "Education Me Assignments List Categories",
					"action": "List categories",
					"description": "List all the categories associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Education Me Assignments Create Categories",
					"value": "Education Me Assignments Create Categories",
					"action": "Create new navigation property to categories for education",
					"description": "Create new navigation property to categories for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Education Me Assignments List Ref Categories",
					"value": "Education Me Assignments List Ref Categories",
					"action": "List categories",
					"description": "List all the categories associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories/$ref"
						}
					}
				},
				{
					"name": "Education Me Assignments Create Ref Categories",
					"value": "Education Me Assignments Create Ref Categories",
					"action": "Create new navigation property ref to categories for education",
					"description": "Create new navigation property ref to categories for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories/$ref"
						}
					}
				},
				{
					"name": "Education Me Assignments Delete Ref Categories",
					"value": "Education Me Assignments Delete Ref Categories",
					"action": "Delete ref of navigation property categories for education",
					"description": "Delete ref of navigation property categories for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories/{{$parameter[\"educationCategory-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Education Me Assignments List Resources",
					"value": "Education Me Assignments List Resources",
					"action": "List assignment resources",
					"description": "Get all the educationAssignmentResource objects associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Me Assignments Create Resources",
					"value": "Education Me Assignments Create Resources",
					"action": "Create educationAssignmentResource",
					"description": "Create an assignment resource. Only teachers can perform this operation. You can create the following types of assignment resources: Every resource has an **@odata.type** property to indicate which type of resource is being created. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Me Assignments Delete Resources",
					"value": "Education Me Assignments Delete Resources",
					"action": "Delete navigation property resources for education",
					"description": "Delete navigation property resources for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources/{{$parameter[\"educationAssignmentResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Get Resources",
					"value": "Education Me Assignments Get Resources",
					"action": "Get resources from education",
					"description": "Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources/{{$parameter[\"educationAssignmentResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Update Resources",
					"value": "Education Me Assignments Update Resources",
					"action": "Update the navigation property resources in education",
					"description": "Update the navigation property resources in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources/{{$parameter[\"educationAssignmentResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Delete Rubric",
					"value": "Education Me Assignments Delete Rubric",
					"action": "Delete navigation property rubric for education",
					"description": "Delete navigation property rubric for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric"
						}
					}
				},
				{
					"name": "Education Me Assignments Get Rubric",
					"value": "Education Me Assignments Get Rubric",
					"action": "Get educationRubric attached to educationAssignment",
					"description": "Get the educationRubric object attached to an educationAssignment, if one exists. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric"
						}
					}
				},
				{
					"name": "Education Me Assignments Update Rubric",
					"value": "Education Me Assignments Update Rubric",
					"action": "Update the navigation property rubric in education",
					"description": "Update the navigation property rubric in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric"
						}
					}
				},
				{
					"name": "Education Me Assignments Delete Ref Rubric",
					"value": "Education Me Assignments Delete Ref Rubric",
					"action": "Delete ref of navigation property rubric for education",
					"description": "Delete ref of navigation property rubric for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric/$ref"
						}
					}
				},
				{
					"name": "Education Me Assignments Get Ref Rubric",
					"value": "Education Me Assignments Get Ref Rubric",
					"action": "Get educationRubric attached to educationAssignment",
					"description": "Get the educationRubric object attached to an educationAssignment, if one exists. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric/$ref"
						}
					}
				},
				{
					"name": "Education Me Assignments Update Ref Rubric",
					"value": "Education Me Assignments Update Ref Rubric",
					"action": "Update the ref of navigation property rubric in education",
					"description": "Update the ref of navigation property rubric in education",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric/$ref"
						}
					}
				},
				{
					"name": "Education Me Assignments List Submissions",
					"value": "Education Me Assignments List Submissions",
					"action": "List submissions",
					"description": "List all the submissions associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application with application permissions can get all the **submissions**, a student can only get **submissions** that they are associated with. Provide the header `Prefer: include-unknown-enum-members` to properly list **submissions** with the `reassigned` status. For details, see the examples section.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions"
						}
					}
				},
				{
					"name": "Education Me Assignments Create Submissions",
					"value": "Education Me Assignments Create Submissions",
					"action": "Create new navigation property to submissions for education",
					"description": "Create new navigation property to submissions for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions"
						}
					}
				},
				{
					"name": "Education Me Assignments Delete Submissions",
					"value": "Education Me Assignments Delete Submissions",
					"action": "Delete navigation property submissions for education",
					"description": "Delete navigation property submissions for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Get Submissions",
					"value": "Education Me Assignments Get Submissions",
					"action": "Get submissions from education",
					"description": "Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Update Submissions",
					"value": "Education Me Assignments Update Submissions",
					"action": "Update the navigation property submissions in education",
					"description": "Update the navigation property submissions in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions List Outcomes",
					"value": "Education Me Assignments Submissions List Outcomes",
					"action": "List outcomes",
					"description": "Retrieve a list of educationOutcome objects.  There are four types of outcomes: **educationPointsOutcome**, **educationFeedbackOutcome**, **educationRubricOutcome**, and **educationFeedbackResourceOutcome**. Only teachers, students, and applications with application permissions can perform this operation. A submission for a credit assignment (one that has no point value and no rubric) will have an educationFeedbackOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for a points assignment (one that has a point value assigned) will have both an educationFeedbackOutcome and an educationPointsOutcome. A submission for an assignment with an attached rubric, if the rubric is a credit rubric (no points), will have an educationFeedbackOutcome and an educationRubricOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for an assignment with an attached rubric, if the rubric is a points rubric, will have an educationFeedbackOutcome, an educationPointsOutcome, and an educationRubricOutcome. A submission for a feedback resource will have an educationFeedbackResourceOutcome. All outcome types have a regular and a published property appropriate to that type of outcome; for example, **points** and **publishedPoints**, **feedback** and **publishedFeedback**. The regular property is the most recent value updated by the teacher; the published property is the most recent value returned to the student.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Create Outcomes",
					"value": "Education Me Assignments Submissions Create Outcomes",
					"action": "Create educationFeedbackResourceOutcome",
					"description": "Create a new feedback resource for a submission. Only a teacher can perform this operation. To create a new file-based resource, upload the file to the feedback resources folder associated with the assignment. If the file doesn't exist or is not in that folder, the `POST` request will fail.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Delete Outcomes",
					"value": "Education Me Assignments Submissions Delete Outcomes",
					"action": "Delete navigation property outcomes for education",
					"description": "Delete navigation property outcomes for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes/{{$parameter[\"educationOutcome-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Get Outcomes",
					"value": "Education Me Assignments Submissions Get Outcomes",
					"action": "Get outcomes from education",
					"description": "Get outcomes from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes/{{$parameter[\"educationOutcome-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Update Outcomes",
					"value": "Education Me Assignments Submissions Update Outcomes",
					"action": "Update the navigation property outcomes in education",
					"description": "Update the navigation property outcomes in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes/{{$parameter[\"educationOutcome-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions List Resources",
					"value": "Education Me Assignments Submissions List Resources",
					"action": "List submission resources",
					"description": "List the resources associated with a submission. Only teachers, students, and applications with application permissions can perform this operation. The educationSubmissionResource object is a wrapper around the actual resource object the student is working on. The wrapper also includes a pointer to the resources on the assignment if this was copied from the assignment during the assign process. These resources are the working copy of the assignment. The **submittedResources** are the resources that have officially been submitted to be graded.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Create Resources",
					"value": "Education Me Assignments Submissions Create Resources",
					"action": "Create educationSubmissionResource",
					"description": "Add a educationSubmissionResource to a submission resource list. Only teachers and students can perform this operation. The operation will not succeed if the **allowStudentsToAddResources** flag is not set to `true`. To create a new file-based resource, upload the file to the resources folder associated with the submission. If the file doesn't exist or is not in that folder, the POST request will fail.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Delete Resources",
					"value": "Education Me Assignments Submissions Delete Resources",
					"action": "Delete navigation property resources for education",
					"description": "Delete navigation property resources for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Get Resources",
					"value": "Education Me Assignments Submissions Get Resources",
					"action": "Get resources from education",
					"description": "Get resources from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Update Resources",
					"value": "Education Me Assignments Submissions Update Resources",
					"action": "Update the navigation property resources in education",
					"description": "Update the navigation property resources in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions List Submitted Resources",
					"value": "Education Me Assignments Submissions List Submitted Resources",
					"action": "Get submittedResources from education",
					"description": "Get submittedResources from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Create Submitted Resources",
					"value": "Education Me Assignments Submissions Create Submitted Resources",
					"action": "Create new navigation property to submittedResources for education",
					"description": "Create new navigation property to submittedResources for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Delete Submitted Resources",
					"value": "Education Me Assignments Submissions Delete Submitted Resources",
					"action": "Delete navigation property submittedResources for education",
					"description": "Delete navigation property submittedResources for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Get Submitted Resources",
					"value": "Education Me Assignments Submissions Get Submitted Resources",
					"action": "Get submittedResources from education",
					"description": "Get submittedResources from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Assignments Submissions Update Submitted Resources",
					"value": "Education Me Assignments Submissions Update Submitted Resources",
					"action": "Update the navigation property submittedResources in education",
					"description": "Update the navigation property submittedResources in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me List Classes",
					"value": "Education Me List Classes",
					"action": "List classes",
					"description": "Retrieve a collection of educationClass resources.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/classes"
						}
					}
				},
				{
					"name": "Education Me Get Classes",
					"value": "Education Me Get Classes",
					"action": "Get classes from education",
					"description": "Classes to which the user belongs. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/classes/{{$parameter[\"educationClass-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me List Rubrics",
					"value": "Education Me List Rubrics",
					"action": "List rubrics",
					"description": "Retrieve a list of educationRubric objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/rubrics"
						}
					}
				},
				{
					"name": "Education Me Create Rubrics",
					"value": "Education Me Create Rubrics",
					"action": "Create educationRubric",
					"description": "Create a new educationRubric object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/rubrics"
						}
					}
				},
				{
					"name": "Education Me Delete Rubrics",
					"value": "Education Me Delete Rubrics",
					"action": "Delete navigation property rubrics for education",
					"description": "Delete navigation property rubrics for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/me/rubrics/{{$parameter[\"educationRubric-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Get Rubrics",
					"value": "Education Me Get Rubrics",
					"action": "Get rubrics from education",
					"description": "When set, the grading rubric attached to the assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/rubrics/{{$parameter[\"educationRubric-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Update Rubrics",
					"value": "Education Me Update Rubrics",
					"action": "Update the navigation property rubrics in education",
					"description": "Update the navigation property rubrics in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/me/rubrics/{{$parameter[\"educationRubric-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me List Schools",
					"value": "Education Me List Schools",
					"action": "List schools",
					"description": "Retrieve a list of schools for a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/schools"
						}
					}
				},
				{
					"name": "Education Me Get Schools",
					"value": "Education Me Get Schools",
					"action": "Get schools from education",
					"description": "Schools to which the user belongs. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/schools/{{$parameter[\"educationSchool-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me List Taught Classes",
					"value": "Education Me List Taught Classes",
					"action": "Get taughtClasses from education",
					"description": "Classes for which the user is a teacher.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/taughtClasses"
						}
					}
				},
				{
					"name": "Education Me Get Taught Classes",
					"value": "Education Me Get Taught Classes",
					"action": "Get taughtClasses from education",
					"description": "Classes for which the user is a teacher.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/taughtClasses/{{$parameter[\"educationClass-id\"]}}"
						}
					}
				},
				{
					"name": "Education Me Get User",
					"value": "Education Me Get User",
					"action": "Get user",
					"description": "Retrieve the simple directory **user** that corresponds to this **educationUser**.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/me/user"
						}
					}
				},
				{
					"name": "Education List Users",
					"value": "Education List Users",
					"action": "List users",
					"description": "Retrieve a list of user objects. These user objects will include education-specific properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users"
						}
					}
				},
				{
					"name": "Education Create Users",
					"value": "Education Create Users",
					"action": "Create educationUser",
					"description": "Create a new user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users"
						}
					}
				},
				{
					"name": "Education Delete Users",
					"value": "Education Delete Users",
					"action": "Delete navigation property users for education",
					"description": "Delete navigation property users for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}"
						}
					}
				},
				{
					"name": "Education Get Users",
					"value": "Education Get Users",
					"action": "Get users from education",
					"description": "Get users from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}"
						}
					}
				},
				{
					"name": "Education Update Users",
					"value": "Education Update Users",
					"action": "Update the navigation property users in education",
					"description": "Update the navigation property users in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users List Assignments",
					"value": "Education Users List Assignments",
					"action": "List assignments of a user",
					"description": "Returns a list of assignments assigned to a user for all classes. Only teachers, students, and applications with application permissions can perform this operation. This utility namespace allows a caller to find all the assignments belonging to a student or a teacher in a single call rather than having to request assignments from each class. The assignment list contains what is needed to get the detailed information for the assignment from within the class namespace. All other operations on the assignment should use the class namespace.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Education Users Create Assignments",
					"value": "Education Users Create Assignments",
					"action": "Create new navigation property to assignments for education",
					"description": "Create new navigation property to assignments for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Education Users Delete Assignments",
					"value": "Education Users Delete Assignments",
					"action": "Delete navigation property assignments for education",
					"description": "Delete navigation property assignments for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Get Assignments",
					"value": "Education Users Get Assignments",
					"action": "Get assignments from education",
					"description": "List of assignments for the user. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Update Assignments",
					"value": "Education Users Update Assignments",
					"action": "Update the navigation property assignments in education",
					"description": "Update the navigation property assignments in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments List Categories",
					"value": "Education Users Assignments List Categories",
					"action": "List categories",
					"description": "List all the categories associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Education Users Assignments Create Categories",
					"value": "Education Users Assignments Create Categories",
					"action": "Create new navigation property to categories for education",
					"description": "Create new navigation property to categories for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Education Users Assignments List Ref Categories",
					"value": "Education Users Assignments List Ref Categories",
					"action": "List categories",
					"description": "List all the categories associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories/$ref"
						}
					}
				},
				{
					"name": "Education Users Assignments Create Ref Categories",
					"value": "Education Users Assignments Create Ref Categories",
					"action": "Create new navigation property ref to categories for education",
					"description": "Create new navigation property ref to categories for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories/$ref"
						}
					}
				},
				{
					"name": "Education Users Assignments Delete Ref Categories",
					"value": "Education Users Assignments Delete Ref Categories",
					"action": "Delete ref of navigation property categories for education",
					"description": "Delete ref of navigation property categories for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/categories/{{$parameter[\"educationCategory-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Education Users Assignments List Resources",
					"value": "Education Users Assignments List Resources",
					"action": "List assignment resources",
					"description": "Get all the educationAssignmentResource objects associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Users Assignments Create Resources",
					"value": "Education Users Assignments Create Resources",
					"action": "Create educationAssignmentResource",
					"description": "Create an assignment resource. Only teachers can perform this operation. You can create the following types of assignment resources: Every resource has an **@odata.type** property to indicate which type of resource is being created. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Users Assignments Delete Resources",
					"value": "Education Users Assignments Delete Resources",
					"action": "Delete navigation property resources for education",
					"description": "Delete navigation property resources for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources/{{$parameter[\"educationAssignmentResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Get Resources",
					"value": "Education Users Assignments Get Resources",
					"action": "Get resources from education",
					"description": "Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources/{{$parameter[\"educationAssignmentResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Update Resources",
					"value": "Education Users Assignments Update Resources",
					"action": "Update the navigation property resources in education",
					"description": "Update the navigation property resources in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/resources/{{$parameter[\"educationAssignmentResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Delete Rubric",
					"value": "Education Users Assignments Delete Rubric",
					"action": "Delete navigation property rubric for education",
					"description": "Delete navigation property rubric for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric"
						}
					}
				},
				{
					"name": "Education Users Assignments Get Rubric",
					"value": "Education Users Assignments Get Rubric",
					"action": "Get educationRubric attached to educationAssignment",
					"description": "Get the educationRubric object attached to an educationAssignment, if one exists. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric"
						}
					}
				},
				{
					"name": "Education Users Assignments Update Rubric",
					"value": "Education Users Assignments Update Rubric",
					"action": "Update the navigation property rubric in education",
					"description": "Update the navigation property rubric in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric"
						}
					}
				},
				{
					"name": "Education Users Assignments Delete Ref Rubric",
					"value": "Education Users Assignments Delete Ref Rubric",
					"action": "Delete ref of navigation property rubric for education",
					"description": "Delete ref of navigation property rubric for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric/$ref"
						}
					}
				},
				{
					"name": "Education Users Assignments Get Ref Rubric",
					"value": "Education Users Assignments Get Ref Rubric",
					"action": "Get educationRubric attached to educationAssignment",
					"description": "Get the educationRubric object attached to an educationAssignment, if one exists. Only teachers, students, and applications with application permissions can perform this operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric/$ref"
						}
					}
				},
				{
					"name": "Education Users Assignments Update Ref Rubric",
					"value": "Education Users Assignments Update Ref Rubric",
					"action": "Update the ref of navigation property rubric in education",
					"description": "Update the ref of navigation property rubric in education",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/rubric/$ref"
						}
					}
				},
				{
					"name": "Education Users Assignments List Submissions",
					"value": "Education Users Assignments List Submissions",
					"action": "List submissions",
					"description": "List all the submissions associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application with application permissions can get all the **submissions**, a student can only get **submissions** that they are associated with. Provide the header `Prefer: include-unknown-enum-members` to properly list **submissions** with the `reassigned` status. For details, see the examples section.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions"
						}
					}
				},
				{
					"name": "Education Users Assignments Create Submissions",
					"value": "Education Users Assignments Create Submissions",
					"action": "Create new navigation property to submissions for education",
					"description": "Create new navigation property to submissions for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions"
						}
					}
				},
				{
					"name": "Education Users Assignments Delete Submissions",
					"value": "Education Users Assignments Delete Submissions",
					"action": "Delete navigation property submissions for education",
					"description": "Delete navigation property submissions for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Get Submissions",
					"value": "Education Users Assignments Get Submissions",
					"action": "Get submissions from education",
					"description": "Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Update Submissions",
					"value": "Education Users Assignments Update Submissions",
					"action": "Update the navigation property submissions in education",
					"description": "Update the navigation property submissions in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions List Outcomes",
					"value": "Education Users Assignments Submissions List Outcomes",
					"action": "List outcomes",
					"description": "Retrieve a list of educationOutcome objects.  There are four types of outcomes: **educationPointsOutcome**, **educationFeedbackOutcome**, **educationRubricOutcome**, and **educationFeedbackResourceOutcome**. Only teachers, students, and applications with application permissions can perform this operation. A submission for a credit assignment (one that has no point value and no rubric) will have an educationFeedbackOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for a points assignment (one that has a point value assigned) will have both an educationFeedbackOutcome and an educationPointsOutcome. A submission for an assignment with an attached rubric, if the rubric is a credit rubric (no points), will have an educationFeedbackOutcome and an educationRubricOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for an assignment with an attached rubric, if the rubric is a points rubric, will have an educationFeedbackOutcome, an educationPointsOutcome, and an educationRubricOutcome. A submission for a feedback resource will have an educationFeedbackResourceOutcome. All outcome types have a regular and a published property appropriate to that type of outcome; for example, **points** and **publishedPoints**, **feedback** and **publishedFeedback**. The regular property is the most recent value updated by the teacher; the published property is the most recent value returned to the student.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Create Outcomes",
					"value": "Education Users Assignments Submissions Create Outcomes",
					"action": "Create educationFeedbackResourceOutcome",
					"description": "Create a new feedback resource for a submission. Only a teacher can perform this operation. To create a new file-based resource, upload the file to the feedback resources folder associated with the assignment. If the file doesn't exist or is not in that folder, the `POST` request will fail.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Delete Outcomes",
					"value": "Education Users Assignments Submissions Delete Outcomes",
					"action": "Delete navigation property outcomes for education",
					"description": "Delete navigation property outcomes for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes/{{$parameter[\"educationOutcome-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Get Outcomes",
					"value": "Education Users Assignments Submissions Get Outcomes",
					"action": "Get outcomes from education",
					"description": "Get outcomes from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes/{{$parameter[\"educationOutcome-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Update Outcomes",
					"value": "Education Users Assignments Submissions Update Outcomes",
					"action": "Update the navigation property outcomes in education",
					"description": "Update the navigation property outcomes in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/outcomes/{{$parameter[\"educationOutcome-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions List Resources",
					"value": "Education Users Assignments Submissions List Resources",
					"action": "List submission resources",
					"description": "List the resources associated with a submission. Only teachers, students, and applications with application permissions can perform this operation. The educationSubmissionResource object is a wrapper around the actual resource object the student is working on. The wrapper also includes a pointer to the resources on the assignment if this was copied from the assignment during the assign process. These resources are the working copy of the assignment. The **submittedResources** are the resources that have officially been submitted to be graded.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Create Resources",
					"value": "Education Users Assignments Submissions Create Resources",
					"action": "Create educationSubmissionResource",
					"description": "Add a educationSubmissionResource to a submission resource list. Only teachers and students can perform this operation. The operation will not succeed if the **allowStudentsToAddResources** flag is not set to `true`. To create a new file-based resource, upload the file to the resources folder associated with the submission. If the file doesn't exist or is not in that folder, the POST request will fail.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Delete Resources",
					"value": "Education Users Assignments Submissions Delete Resources",
					"action": "Delete navigation property resources for education",
					"description": "Delete navigation property resources for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Get Resources",
					"value": "Education Users Assignments Submissions Get Resources",
					"action": "Get resources from education",
					"description": "Get resources from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Update Resources",
					"value": "Education Users Assignments Submissions Update Resources",
					"action": "Update the navigation property resources in education",
					"description": "Update the navigation property resources in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/resources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions List Submitted Resources",
					"value": "Education Users Assignments Submissions List Submitted Resources",
					"action": "Get submittedResources from education",
					"description": "Get submittedResources from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Create Submitted Resources",
					"value": "Education Users Assignments Submissions Create Submitted Resources",
					"action": "Create new navigation property to submittedResources for education",
					"description": "Create new navigation property to submittedResources for education",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Delete Submitted Resources",
					"value": "Education Users Assignments Submissions Delete Submitted Resources",
					"action": "Delete navigation property submittedResources for education",
					"description": "Delete navigation property submittedResources for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Get Submitted Resources",
					"value": "Education Users Assignments Submissions Get Submitted Resources",
					"action": "Get submittedResources from education",
					"description": "Get submittedResources from education",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Assignments Submissions Update Submitted Resources",
					"value": "Education Users Assignments Submissions Update Submitted Resources",
					"action": "Update the navigation property submittedResources in education",
					"description": "Update the navigation property submittedResources in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/submittedResources/{{$parameter[\"educationSubmissionResource-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users List Classes",
					"value": "Education Users List Classes",
					"action": "List classes",
					"description": "Retrieve a collection of educationClass resources.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/classes"
						}
					}
				},
				{
					"name": "Education Users Get Classes",
					"value": "Education Users Get Classes",
					"action": "Get classes from education",
					"description": "Classes to which the user belongs. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/classes/{{$parameter[\"educationClass-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users List Rubrics",
					"value": "Education Users List Rubrics",
					"action": "List rubrics",
					"description": "Retrieve a list of educationRubric objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/rubrics"
						}
					}
				},
				{
					"name": "Education Users Create Rubrics",
					"value": "Education Users Create Rubrics",
					"action": "Create educationRubric",
					"description": "Create a new educationRubric object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/rubrics"
						}
					}
				},
				{
					"name": "Education Users Delete Rubrics",
					"value": "Education Users Delete Rubrics",
					"action": "Delete navigation property rubrics for education",
					"description": "Delete navigation property rubrics for education",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/rubrics/{{$parameter[\"educationRubric-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Get Rubrics",
					"value": "Education Users Get Rubrics",
					"action": "Get rubrics from education",
					"description": "When set, the grading rubric attached to the assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/rubrics/{{$parameter[\"educationRubric-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Update Rubrics",
					"value": "Education Users Update Rubrics",
					"action": "Update the navigation property rubrics in education",
					"description": "Update the navigation property rubrics in education",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/rubrics/{{$parameter[\"educationRubric-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users List Schools",
					"value": "Education Users List Schools",
					"action": "List schools",
					"description": "Retrieve a list of schools for a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/schools"
						}
					}
				},
				{
					"name": "Education Users Get Schools",
					"value": "Education Users Get Schools",
					"action": "Get schools from education",
					"description": "Schools to which the user belongs. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/schools/{{$parameter[\"educationSchool-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users List Taught Classes",
					"value": "Education Users List Taught Classes",
					"action": "Get taughtClasses from education",
					"description": "Classes for which the user is a teacher.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/taughtClasses"
						}
					}
				},
				{
					"name": "Education Users Get Taught Classes",
					"value": "Education Users Get Taught Classes",
					"action": "Get taughtClasses from education",
					"description": "Classes for which the user is a teacher.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/taughtClasses/{{$parameter[\"educationClass-id\"]}}"
						}
					}
				},
				{
					"name": "Education Users Get User",
					"value": "Education Users Get User",
					"action": "Get user",
					"description": "Retrieve the simple directory **user** that corresponds to this **educationUser**.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/user"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /education/me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Delete Me"
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
						"Education Education User"
					],
					"operation": [
						"Education Delete Me"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Get Me"
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
						"Education Education User"
					],
					"operation": [
						"Education Get Me"
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
						"Education Education User"
					],
					"operation": [
						"Education Get Me"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Update Me"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Update Me"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/me/assignments/{educationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Delete Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Get Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Create Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/categories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Create Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/categories/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Ref Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/categories/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Create Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Create Ref Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/me/assignments/{educationAssignment-id}/categories/{educationCategory-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Delete Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Delete Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Delete Ref Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Create Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/resources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Create Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Delete Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Get Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Get Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Get Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Update Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Update Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/me/assignments/{educationAssignment-id}/rubric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Delete Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Delete Rubric"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/rubric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Get Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Get Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Get Rubric"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/rubric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Update Rubric"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/rubric<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Update Rubric"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/me/assignments/{educationAssignment-id}/rubric/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Delete Ref Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Delete Ref Rubric"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/rubric/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Get Ref Rubric"
					]
				}
			}
		},
		{
			"displayName": "PUT /education/me/assignments/{educationAssignment-id}/rubric/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Update Ref Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Update Ref Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Update Ref Rubric"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/submissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments List Submissions"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Create Submissions"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Create Submissions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Delete Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Delete Submissions"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Get Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Get Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Get Submissions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Update Submissions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Update Submissions"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Outcomes"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Create Outcomes"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Create Outcomes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Delete Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Delete Outcomes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Get Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Get Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Get Outcomes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Update Outcomes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Update Outcomes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Create Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Create Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Delete Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Get Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Get Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Get Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Update Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Update Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions List Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Create Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Create Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Delete Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Delete Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Get Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Get Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Get Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Update Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Assignments Submissions Update Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/classes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/classes/{educationClass-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Get Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/rubrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Rubrics"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/rubrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Create Rubrics"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/rubrics<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Create Rubrics"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/me/rubrics/{educationRubric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Delete Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Delete Rubrics"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/rubrics/{educationRubric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Get Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get Rubrics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/rubrics/{educationRubric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Update Rubrics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/me/rubrics/{educationRubric-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Update Rubrics"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/schools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Schools"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/schools/{educationSchool-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Get Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get Schools"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/taughtClasses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me List Taught Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/taughtClasses/{educationClass-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Get Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get Taught Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/me/user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Me Get User"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get User"
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
						"Education Education User"
					],
					"operation": [
						"Education Me Get User"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education List Users"
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
						"Education Education User"
					],
					"operation": [
						"Education List Users"
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
						"Education Education User"
					],
					"operation": [
						"Education List Users"
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
						"Education Education User"
					],
					"operation": [
						"Education List Users"
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
						"Education Education User"
					],
					"operation": [
						"Education List Users"
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
						"Education Education User"
					],
					"operation": [
						"Education List Users"
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
						"Education Education User"
					],
					"operation": [
						"Education List Users"
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
						"Education Education User"
					],
					"operation": [
						"Education List Users"
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
						"Education Education User"
					],
					"operation": [
						"Education List Users"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Create Users"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Create Users"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/users/{educationUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Delete Users"
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
						"Education Education User"
					],
					"operation": [
						"Education Delete Users"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Get Users"
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
						"Education Education User"
					],
					"operation": [
						"Education Get Users"
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
						"Education Education User"
					],
					"operation": [
						"Education Get Users"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Update Users"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Update Users"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Delete Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Get Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get Assignments"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Create Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Create Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Ref Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Create Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Create Ref Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories/{educationCategory-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Delete Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Delete Ref Categories"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Delete Ref Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Create Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Create Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Delete Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Get Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Get Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Get Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Update Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Update Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Delete Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Delete Rubric"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Get Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Get Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Get Rubric"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Update Rubric"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Update Rubric"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Delete Ref Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Delete Ref Rubric"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Get Ref Rubric"
					]
				}
			}
		},
		{
			"displayName": "PUT /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Update Ref Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Update Ref Rubric"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Update Ref Rubric"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments List Submissions"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Create Submissions"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Create Submissions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Delete Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Delete Submissions"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Get Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Get Submissions"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Get Submissions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Update Submissions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Update Submissions"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Outcomes"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Create Outcomes"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Create Outcomes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Delete Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Delete Outcomes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Get Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Get Outcomes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Get Outcomes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Update Outcomes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Update Outcomes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Create Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Create Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Delete Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Get Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Get Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Get Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Update Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Update Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions List Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Create Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Create Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Delete Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Delete Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Get Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Get Submitted Resources"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Get Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Update Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Assignments Submissions Update Submitted Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/classes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/classes/{educationClass-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Get Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/rubrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Rubrics"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/rubrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Create Rubrics"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/rubrics<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Create Rubrics"
					]
				}
			}
		},
		{
			"displayName": "DELETE /education/users/{educationUser-id}/rubrics/{educationRubric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Delete Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Delete Rubrics"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/rubrics/{educationRubric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Get Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get Rubrics"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get Rubrics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Update Rubrics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Update Rubrics"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/schools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Schools"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/schools/{educationSchool-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Get Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get Schools"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get Schools"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/taughtClasses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users List Taught Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/taughtClasses/{educationClass-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Get Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get Taught Classes"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get Taught Classes"
					]
				}
			}
		},
		{
			"displayName": "GET /education/users/{educationUser-id}/user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Education User"
					],
					"operation": [
						"Education Users Get User"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get User"
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
						"Education Education User"
					],
					"operation": [
						"Education Users Get User"
					]
				}
			}
		},
];
